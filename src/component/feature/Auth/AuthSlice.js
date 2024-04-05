import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthServies from "../../AuthServies";
import { fabClasses } from "@mui/material";
     
 const userExist=JSON.parse(localStorage.getItem("user"))
const initialState={
    user:userExist?userExist:null,
    isLoading:false,
    isSuccess:false,
    isError:false,
    message:"someThing Went wrong"
}

const AuthSlice=createSlice({
    
    name:"auth",
    initialState,
    reducers:{

    },

    extraReducers:(builder)=>{
builder.addCase(registerUser.pending,(state)=>{
    state.isLoading=true
})
.addCase(registerUser.fulfilled,(state,action)=>{
    state.isLoading=false
    state.isSuccess=true
    state.user=action.payload
})
.addCase(registerUser.rejected,(state,action)=>{
state.isError=true
state.isLoading=false
state.isSuccess=false
state.user=null
state.message=action.payload
}).addCase(userLogOut.fulfilled,(state)=>{
    state.user=null
    state.isError=false
    state.isSuccess=false
    state.isLoading=false
    state.message=''
})
.addCase(login.pending,(state)=>{
    state.isLoading=true
})
.addCase(login.fulfilled,(state,action)=>{
    state.isLoading=false
    state.isSuccess=true
    state.user=action.payload
})
.addCase(login.rejected,(state,action)=>{
state.isError=true
state.isLoading=false
state.isSuccess=false
state.user=null
state.message=action.payload
})

    }
})
export default AuthSlice.reducer


 export const registerUser=createAsyncThunk('REGISTER/USER', async(formdata)=>{
   

   return await AuthServies.register(formdata)


 })
  export const userLogOut=createAsyncThunk("LOGOUT/USER",async()=>{
    localStorage.removeItem('user')
  })


  export const login=createAsyncThunk("LOGIN/USER", async(formdata,thunkApi)=>{
 try {
    return await AuthServies.loginUser(formdata) } 
    catch (error) {
    const message=error.response.data.message
    
    return thunkApi.rejectWithValue(message)
 }
  })