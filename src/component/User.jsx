import { Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const User = () => {
     const navigate= useNavigate()

  const {user}= useSelector(state=>state.auth)
    useEffect(()=>{
 if(!user)
 navigate('/login')

    },[user])


  return (
    <Typography sx={{textAlign:"center", fontSize:'40px'}}>
        welcome User
    </Typography>
  )
}

export default User