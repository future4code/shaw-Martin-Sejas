import React from 'react'
import Login from "../../pages/Login/Login"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from "../../pages/SignUp/SignUp"
import Feed from "../../pages/Feed/Feed"
import Post from '../../pages/Post/Post'
import ErrorPage from '../../pages/ErrorPage/ErrorPage'

function AppRoutes() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element = {<Login/>}/>
      <Route path = "/signup" element = {<SignUp/>}/>
      <Route path = "/feed" element = {<Feed/>} />
      <Route path = "/feed/:id" element = {<Post/>} />
      <Route path = '*' element = {<ErrorPage/>} /> 
    </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes