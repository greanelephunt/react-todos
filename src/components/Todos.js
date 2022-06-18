import { Fragment } from "react";
import { useSelector } from "react-redux";
import classes from "./Todos.module.css";
import TodosInput from "./TodosInput";
import Todo from "./Todo";
import TodosFooter from "./TodosFooter";

const Todos = () => {

  let todos = useSelector(store => store.todos.todos);
  const showMode = useSelector(store => store.todos.showMode);

  if(showMode === "active") {
    todos = todos.filter(todo => todo.active);
  } else if (showMode === "completed") {
    todos = todos.filter(todo => !todo.active);
  }

  return (
    <Fragment>
      <div className={classes.todos_container}>
        <TodosInput />
        {todos.map((todo) => (
          <Todo key={todo.id} id={todo.id} title={todo.title} active={todo.active}/>
        ))}
        <TodosFooter />
      </div>
      <div className={classes.middle_sheet}></div>
      <div className={classes.bottom_sheet}></div>
    </Fragment>
  );
};

export default Todos;
