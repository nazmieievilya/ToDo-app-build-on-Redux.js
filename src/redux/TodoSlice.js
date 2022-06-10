import { createSlice } from "@reduxjs/toolkit";
import { InitialStateArray } from "constants/constants";

const getInitalTodo = () => {
  const localTodoList = window.localStorage.getItem("todoList");
  if (localTodoList) {
    return JSON.parse(localTodoList);
  }
  window.localStorage.setItem("todoList", JSON.stringify(InitialStateArray));
  return InitialStateArray;
};

const initialValue = {
  todoList: getInitalTodo(),
};

const todoSlice = createSlice({
  name: "todos",
  initialState: initialValue,
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
      const todoList = window.localStorage.getItem("todoList");
      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        todoListArr.push({
          ...action.payload,
        });
        window.localStorage.setItem("todoList", JSON.stringify(todoListArr));
      }
    },
    dellTodo: (state, action) => {
      const todoList = window.localStorage.getItem("todoList");
      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        todoListArr.forEach((todo, index) => {
          if (todo.id === action.payload.id) {
            todoListArr.splice(index, 1);
          }
        });
        window.localStorage.setItem("todoList", JSON.stringify(todoListArr));
        state.todoList = todoListArr;
      }
    },
    toggleTodo: (state, action) => {
      const todoList = window.localStorage.getItem("todoList");
      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        const index = todoListArr.findIndex(
          (item) => item.id === action.payload.id
        );
        todoListArr[index].completed = !todoListArr[index].completed;
        window.localStorage.setItem("todoList", JSON.stringify(todoListArr));
        state.todoList = todoListArr;
      }
    },
    changeTodo: (state, action) => {
      console.log(
        "newText for: " + action.payload.id + " is " + action.payload.text
      );
      const todoList = window.localStorage.getItem("todoList");
      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        const index = todoListArr.findIndex(
          (item) => item.id === action.payload.id
        );
        todoListArr[index].name = action.payload.text;
        window.localStorage.setItem("todoList", JSON.stringify(todoListArr));
        state.todoList = todoListArr;
      }
    },
  },
});

export const { addTodo, dellTodo, toggleTodo, changeTodo } = todoSlice.actions;
export default todoSlice.reducer;
