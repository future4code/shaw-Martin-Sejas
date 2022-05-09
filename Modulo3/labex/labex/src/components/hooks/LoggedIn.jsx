import { useEffect, useState } from 'react';

export  function LoggedIn() {
  
    let [tokenExists, setTokenExists] = useState(false);
 

  useEffect( () => {
    
    if (window.localStorage.getItem('token') !== null)
    {
      setTokenExists(true)
    }
  }, [])

  return tokenExists; 
}
