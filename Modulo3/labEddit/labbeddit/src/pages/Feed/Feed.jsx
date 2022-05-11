import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import {goToLogin} from '../../services/Routes/coordinates'

function Feed() {
  const navigate = useNavigate(); 
  
  useEffect(() => {
    if (window.localStorage.length === 0) 
    {
       goToLogin(navigate)
    }
  
  }, [])

  return (
    <div>Feed</div>
  )
}

export default Feed