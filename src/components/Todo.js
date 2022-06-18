import { useDispatch } from "react-redux";
import { todosActions } from "../store/todos-slice";
import classes from "./Todo.module.css";

const Todo = (props) => {
  const dispatch = useDispatch();

  const todoClickHandler = () => {
    dispatch(todosActions.checkTodo(props.id));
  };

  const todoTitleClassName = props.active
    ? classes.todo
    : classes.todo_completed;

  return (
    <div className={classes.todo_container} onClick={todoClickHandler}>
      <div className={classes.todo_checkbox}>
        {!props.active && (
          <div className={classes.img_container}>
            <img src={`${process.env.PUBLIC_URL}/checkmark.svg`} />
          </div>
        )}
      </div>
      <div className={todoTitleClassName}>{props.title}</div>
    </div>
  );
};

export default Todo;
