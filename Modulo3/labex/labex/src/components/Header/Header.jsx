import { Button } from '@chakra-ui/react'
import React from 'react'
import { HeaderMainDiv } from './styled'


const Header = (props) => {
  return (
    <HeaderMainDiv>
        <Button colorScheme="primary" onClick={props.leftButton}>{props.left}</Button>
        <div><h1>LabeX</h1></div>
        <Button colorScheme="primary" onClick= {props.rightButton}>{props.right}</Button>
    </HeaderMainDiv>
  )
}

export default Header