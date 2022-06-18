import { useRef } from "react";
import { useDispatch } from "react-redux";
import { todosActions } from "../store/todos-slice";
import classes from "./TodosInput.module.css";

const TodosInput = () => {

  const dispatch = useDispatch();
  const inputRef = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if(inputRef.current.value.length === 0) return;
    dispatch(todosActions.addTodo(inputRef.current.value))
  }

  //кнопка нужна, чтобы субмитить по нажатию Enter

  return (
    <form className={classes.todos_input} onSubmit={formSubmitHandler}>
      <button type="submit"></button>
      <input
        ref={inputRef}
        placeholder="What needs to be done?"
      />
    </form>
  );
};

export default TodosInput;
