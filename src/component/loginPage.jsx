import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useEffect } from 'react';
import { useState } from 'react';
import { Password } from '@mui/icons-material';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { login } from './feature/Auth/AuthSlice';




// TODO remove, this demo shouldn't need to reset the theme.



 const SignInSide=()=> {

    //all Hooks
   const navigate=useNavigate()
 const dispatch=useDispatch()

   // allState
 const {isLoading ,user,isSuccess ,isError,message}=useSelector(state=>state.auth)
 const [formdata,setFormData]=useState({
    email:"",
    password:""
 })
 const{email,password}=formdata






   useEffect(()=>{
if(user || isSuccess)
{
    navigate('/')
}


if(isError || message)
{
     Swal.fire({
        title: 'Error!',
        icon: 'error',
        
       })
}
   },[user,isError,message,isSuccess])


  
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

// all Function
 const handleChange=(e)=>{

setFormData({
    ...formdata,
    [e.target.name]:e.target.value
})

 }
 const handleSubmit=(e)=>{
e.preventDefault()
dispatch(login(formdata))

setFormData({
    email:"",
    password:''
})
 }


  return (
   
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form"  onSubmit={handleSubmit} noValidate  sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={email}
                onChange={handleChange}
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                value={password}
                onChange={handleChange}
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
             
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  
                </Grid>
                <Grid item>
                
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>

  );
}
export default SignInSide



