import { configureStore } from "@reduxjs/toolkit";
 import AuthReducer from './Auth/AuthSlice'
const store= configureStore({
   reducer:{
    auth:AuthReducer
   }
})

 export default store