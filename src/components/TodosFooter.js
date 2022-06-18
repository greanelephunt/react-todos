import { useSelector, useDispatch } from "react-redux";
import { todosActions } from "../store/todos-slice";
import classes from "./TodosFooter.module.css";

const TodosFooter = () => {
  const activeCount = useSelector(store => store.todos.activeCount);
  const showMode = useSelector(store => store.todos.showMode);
  const dispatch = useDispatch();

  const clearCompletedClickHandler = () => {
    dispatch(todosActions.clearCompleted());
  }

  const allButtonClickHandler = () => {
    dispatch(todosActions.setMode("all"));
  }

  const activeButtonClickHandler = () => {
    dispatch(todosActions.setMode("active"));
  }

  const completedButtonClickHandler = () => {
    dispatch(todosActions.setMode("completed"));
  }

  return (
    <div className={classes.todos_footer__wrapper}>
      <div className={classes.todos_footer__left}>{activeCount} items left</div>
      <div className={classes.todos_footer__center}>
        <div className={showMode === "all" ? classes.current : ""} onClick={allButtonClickHandler}>All</div>
        <div className={showMode === "active" ? classes.current : ""} onClick={activeButtonClickHandler}>Active</div>
        <div className={showMode === "completed" ? classes.current : ""} onClick={completedButtonClickHandler}>Completed</div>
      </div>
      <div className={classes.todos_footer__right} onClick={clearCompletedClickHandler}>Clear completed</div>
    </div>
  );
};

export default TodosFooter;
