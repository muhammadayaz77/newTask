import { createSlice } from "@reduxjs/toolkit";



let TodoSlice = createSlice({
    name : 'todo',
    initialState : {
        todo : []
    },
    reducers : {
        addToProgress : (state,action) => {
            console.log(state,action)
           state.todo.push(action.payload);
        },
    }
})

export const authActions = TodoSlice.actions;
export default TodoSlice;