import axios from "axios"
  
 const API_Url="/api/user"
 
 const register=async(formdata)=>{
     const response= await axios.post(API_Url+"/register" ,formdata)
 localStorage.setItem("user",JSON.stringify(response.data))
 return response.data
 }

   const loginUser= async(formdata)=>{
    const response= await  axios.post(API_Url+'/login',formdata)
    localStorage.setItem("user",JSON.stringify(response.data))
    return response.data
   }

   const AuthServies={
    register,
    loginUser
   }
   export default AuthServies