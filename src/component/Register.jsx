import { Copyright } from '@mui/icons-material'
import { Avatar, Box, Button, Card, Checkbox, CircularProgress, Container, CssBaseline, FormControlLabel, Grid, Link, Paper, TextField, Typography } from '@mui/material'
import shadows from '@mui/material/styles/shadows'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { registerUser } from './feature/Auth/AuthSlice'


const Register = () => {
    //All Hooks
    const navigate=useNavigate()
const dispatch = useDispatch()
    //All state
    const [formdata,setFormData]=useState({
        name:"",
        email:"",
        password:'',
        password2:''
    })
const{name,email,password,password2}=formdata
const {isLoading ,user,isSuccess, isError, message}=useSelector(state=>state.auth)

// function
const handleChange=(e)=>{
    setFormData({
        ...formdata,
        [e.target.name]:e.target.value
    })
}

const handleSubmit=(e)=>{
    e.preventDefault()
   if(password!==password2)
   {
       Swal.fire({
           title: " invalid password?",
           text: "invalid password",
           icon: "error"
         });
   }

   dispatch(registerUser(formdata))
    setFormData({
        name:'',
        email:'',
        password:'',
        password2:"",
    })

    }


    
   
    useEffect(()=>{
        if(user || isSuccess)
        {navigate('/')}

        if(isError||message)
        {
            Swal.fire({
                title: 'Error!',
                icon: 'error',
                confirmButtonText: 'Cool'
              })
        }
           },[user])
  
 if(isLoading){
 return(
<Container maxWidth="md" sx={{
display:"flex",
alignItems:'center'
}}>
    <CircularProgress/>
</Container>
 )
 }










  return (

    <Container  maxWidth="sm"   >
        <CssBaseline />
      
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        
          </Avatar>
          <Typography component="h1" variant="h5">
           Register
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate  sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}  >
                <TextField
                  autoComplete="given-name"
                  name="name"
                  onChange={handleChange}
                  value={name}
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  onChange={handleChange}
                  value={email}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  onChange={handleChange}
                  value={password}
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password2"
                  onChange={handleChange}
                  value={password2}
                  label="confirm Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
            Register
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                
              </Grid>
            </Grid>
          </Box>
          
        </Box> 
      
        <Copyright sx={{ mt: 5 }} />
      </Container>

  )
}

export default Register