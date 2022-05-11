import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { goToFeed, goToLogin } from '../../services/Routes/coordinates';

function ErrorPage() {
  const navigate = useNavigate(); 

  useEffect(() => {
    if (window.localStorage.length === 0) 
    {
      goToLogin(navigate); 
    }

    else {
      goToFeed(navigate); 
    }
  
   
  }, [])
  
  return (
    <div>ErrorPage</div>
  )
}

export default ErrorPage