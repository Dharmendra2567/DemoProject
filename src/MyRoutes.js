import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FirstPage from './pages/FirstPage'
import TryBuild from './pages/TryBuild'
import Navbar from './components/Navbar'
import Posts from './components/Posts'

const MyRoutes = () => {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<FirstPage/>}/>
            <Route path='/try' element={<TryBuild/>}/>
            <Route path='/nav' element={<Navbar/>}/>  
            <Route path='/posts' element={<Posts/>}/>

          
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default MyRoutes