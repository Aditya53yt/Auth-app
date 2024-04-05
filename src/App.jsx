import React from 'react'
import SignInSide from './component/loginPage'
import { Container } from '@mui/material'
import Navbar from './component/Navbar'
import Register from './component/Register'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { Home } from '@mui/icons-material'
import User from './component/User'

const App = () => {
  return (
    
   <Router>
    <Navbar/>
    
   <Container sx={{margin:'10px 20px'}}>
    <Routes>
  <Route path='/' element={<User/>}/>
   <Route path='/login' element={<SignInSide/>}/>
  <Route path='/register' element={ <Register/>}/>
  </Routes>
   </Container>
   
   </Router>
 
  )
}
export default App