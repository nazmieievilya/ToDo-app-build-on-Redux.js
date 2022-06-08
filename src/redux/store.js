import todoReducer from './TodoSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        todos: todoReducer,
    },
});
export default store;
