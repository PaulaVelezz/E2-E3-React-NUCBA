import { createSlice } from "@reduxjs/toolkit";


export const tareaSlice = createSlice({
    name: "tasks",
    initialState:[],
    reducers:{
        //agregar tarea 
        addTarea: (state, action)=>{
            const newTask = {
                id: new Date(),
                name: action.payload.task
            }
            state.push(newTask);
        },
        //eliminar tarea
        deleteTarea: (state, action)=>{
            return state.filter((item) => item.id !== action.payload.id);
        },
    }
});

export const {addTarea, deleteTarea} = tareaSlice.actions;

export default tareaSlice.reducer;