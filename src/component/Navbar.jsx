import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import LoginIcon from '@mui/icons-material/Login';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogOut } from './feature/Auth/AuthSlice';

const Navbar = () => {
     
    const{user}=useSelector(state=>state.auth)    
 
 const dispatch=useDispatch()
 const navigate=useNavigate()

const handleLogOut=()=>{

    dispatch(userLogOut())
    navigate('/login')
  
}
     


  return (
    <Box sx={{ flexGrow: 1 ,}}>
      <AppBar position="static" sx={{backgroundColor:'#2C3A47'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
           
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1,}}>
     <Link to={'/'} style={{textDecoration:'none',color:'white'}}>AuthApp</Link>
          </Typography>
        <span>
            {!user?(
                <>
                <Link to={'/register'}><Button variant='contained' sx={{backgroundColor:"green"}}>register<PersonIcon /> </Button></Link>
            <Link to={'/login'}><Button variant='contained' sx={{backgroundColor:"grey" ,margin:'0pc 20px'}}>Login <LoginIcon /> </Button> </Link>
                </>
            ):
            <Button variant='contained' sx={{backgroundColor:"red"}} onClick={handleLogOut}>logOut <LogoutIcon/></Button>
        }
            
        </span>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar