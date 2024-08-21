import {configureStore} from '@reduxjs/toolkit'
import AuthSlice from './AuthSlice'
import TodoSlice from './TodoSlice';
import CompSlice from './CompSlice';

let myStore = configureStore({
    reducer : {
        auth : AuthSlice.reducer,
        todo : TodoSlice.reducer,
        comp : CompSlice.reducer,
    }
})

export default myStore;