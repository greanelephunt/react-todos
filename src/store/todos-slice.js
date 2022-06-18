import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: { activeCount: 0, todos: [], showMode: "all", lastId: 0 },
  reducers: {
    addTodo(store, action) {
      store.todos.push({
        id: store.lastId,
        active: true,
        title: action.payload,
      });
      store.activeCount = +store.activeCount + 1;
      store.lastId = +store.lastId + 1;
    },
    checkTodo(store, action) {
      const targetTodo = store.todos.filter((todo) => todo.id === action.payload)[0];
      const targetTodoIndex = store.todos.indexOf(targetTodo);
      const targetTodoActive = targetTodo.active;

      store.todos[targetTodoIndex] = { ...targetTodo, active: !targetTodoActive };

      if(targetTodoActive) {
        store.activeCount--;
      } else {
        store.activeCount++;
      }
    },
    clearCompleted(store) {
      const newTodos = store.todos.filter((todo) => todo.active);
      store.todos = newTodos
      store.activeCount = newTodos.length;
    },
    setMode(store, action){
      store.showMode = action.payload;
    }
  },
});

export const todosActions = todosSlice.actions;
export default todosSlice;
