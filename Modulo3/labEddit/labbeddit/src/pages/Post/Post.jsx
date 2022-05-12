import React, {useEffect, useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import {goToLastPage, goToLogin, performLogout} from '../../services/Routes/coordinates'
import { PostContentDiv, PostMainDiv } from './styled';
import Header from '../../components/Header/Header';
import {GlobalContext} from '../../contexts/GlobalContext/GlobalContext';
import PostBox from '../../components/PostBox/PostBox';

function Post() {
  const {states,setters} = useContext(GlobalContext); 
  let {detailedPost} = states; 
  let {setDetailedPost} = setters; 
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

      <PostContentDiv>
        <PostBox key={detailedPost.id} post={detailedPost} fromFeed={false}/>
      </PostContentDiv>
      </PostMainDiv>
  )
}

export default Post