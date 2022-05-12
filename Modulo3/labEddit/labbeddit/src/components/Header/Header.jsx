import { Button } from '@chakra-ui/react';
import React from 'react';
import labenu from '../../assets/logo.svg';
import { HeaderMainDiv } from './styled';

function Header(props) {
  //props 
  //showLeftButton
  //leftButtonText
  //leftButtonClick
  //rightButtonText
  //rightButtonClick

  return (
    <HeaderMainDiv>
      {props.showLeftButton ? <Button id= "leftButton" variant='link' onClick={()=> props.leftButtonClick()}>{props.leftButtonText}</Button> : <span>{props.rightButtonText}</span>} 
      <img alt='logo' src={labenu} /> 
      <Button id= "rightButton" variant='link' onClick={()=> props.rightButtonClick()}>{props.rightButtonText}</Button>
      </HeaderMainDiv>
  )
}

export default Header