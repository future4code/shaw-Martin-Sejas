import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import {goToLastPage, goToLogin, performLogout} from '../../services/Routes/coordinates'
import { PostMainDiv } from './styled';
import Header from '../../components/Header/Header';

function Post() {
  const navigate = useNavigate(); 
  
  useEffect(() => {
    if (window.localStorage.length === 0) 
    {
       goToLogin(navigate)
    }
  
  }, [])
  
  return (
    <PostMainDiv>
         <Header 
        rightButtonText = "Logout"
        showLeftButton = {true}
        leftButtonText = "X"
        rightButtonClick = {()=>performLogout(navigate) }
        leftButtonClick = {()=> goToLastPage(navigate)}
      />
      </PostMainDiv>
  )
}

export default Post