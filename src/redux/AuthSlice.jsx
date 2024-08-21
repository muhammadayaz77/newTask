import { createSlice } from "@reduxjs/toolkit";



let AuthSlice = createSlice({
    name : 'auth',
    initialState : false,
    reducers : {
        login : (state) => {
             return state = true;
        },
        logout : (state) => {
            return state = false;
        },
    }
})

export const authActions = AuthSlice.actions;
export default AuthSlice;