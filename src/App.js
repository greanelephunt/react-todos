import classes from "./App.module.css";
import Todos from "./components/Todos";

function App() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.todos_logo}>todos</div>
      <Todos />
    </div>
  );
}

export default App;
