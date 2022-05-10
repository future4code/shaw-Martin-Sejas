import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header/Header'
import { goToLastPage } from '../../services/Routes/coordinates';
import { SignUpContentDiv, SignUpMainDiv } from './styled'

function SignUp() {
  const navigate = useNavigate(); 

  return (
    <SignUpMainDiv>
      <Header 
      showLeftButton={false} 
      rightButtonText={"Entrar"} 
      rightButtonClick = {()=> goToLastPage(navigate)}
      />
      <SignUpContentDiv>

      </SignUpContentDiv>
    </SignUpMainDiv>
  )
}

export default SignUp