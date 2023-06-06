import { createSlice } from '@reduxjs/toolkit';


export const todoSlice = createSlice ({
    name: 'todos', 
    initialState: [
        {id: 1, title: 'Tarea de ejemplo', completed: false }
    ],

    reducers: {
        //agregar tarea 
        addTodo: (state, action) => {
            const todo = {
                id: new Date(),
                title: action.payload.title,
                completed: false,
            };
            state.push(todo);
        },
        //eliminar tareas
        deleteTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload.id);
        },
        //tachar tareas
        toggleComplete: (state, action) => {
            const index = state.findIndex((todo) => todo.id === action.payload.id);
            state[index].completed = action.payload.completed;
        },
    },
});

export const { addTodo, deleteTodo, toggleComplete } = todoSlice.actions;

export default todoSlice.reducer;