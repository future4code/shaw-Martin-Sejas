import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import {goToLogin} from '../../services/Routes/coordinates'

function Post() {
  const navigate = useNavigate(); 
  
  useEffect(() => {
    if (window.localStorage.length === 0) 
    {
       goToLogin(navigate)
    }
  
  }, [])
  
  return (
    <div>Post</div>
  )
}

export default Post