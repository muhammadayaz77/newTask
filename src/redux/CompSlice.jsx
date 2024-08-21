import { createSlice } from "@reduxjs/toolkit";



let CompSlice = createSlice({
    name : 'comp',
    initialState : {
        comp : []
    },
    reducers : {
        addToComplete : (state,action) => {
            console.log(state.comp,action)
           state.comp.push(action.payload);
        },
    }
})

export const comActions = CompSlice.actions;
export default CompSlice;