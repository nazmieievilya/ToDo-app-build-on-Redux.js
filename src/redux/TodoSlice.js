import { createSlice } from "@reduxjs/toolkit";




const todoSlice = createSlice({
    name: 'todos',
    initialState: [
        {
            id: 1,
            name: "Погладити кішку",
            completed: true
        },
        {
            id: 2,
            name: "Покормити кішку",
            completed: true
        },
        
    ],
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: Date.now(),
                name: action.payload.name,
                completed: false
            }
            state.push(todo)
        },
        dellTodo: (state, action) => {
            console.log(action.payload.id)
            const newArr = state.filter(
                (todo) => todo.id !== action.payload.id
            )
            return state = newArr
        },
        toggleTodo: (state, action) => {
            const index = state.findIndex(
                (todo) => todo.id === action.payload.id
            )
            state[index].completed = !state[index].completed
        }
    }
});

export const { addTodo, dellTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;