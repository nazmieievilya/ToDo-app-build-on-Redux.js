import { configureStore } from "@reduxjs/toolkit";
import addTodo from './TodoSlice'
const store = configureStore({
    reducer: {
        todos: addTodo
    }
});
export default store;