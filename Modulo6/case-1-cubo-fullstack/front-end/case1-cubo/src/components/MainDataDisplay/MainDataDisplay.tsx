import React from 'react'
import { MainDataDisplayDiv } from './styled'

type MainDataDisplayProps = {
    children: React.ReactNode; 
}

export const MainDataDisplay = (props:MainDataDisplayProps) => {
  return (
    <MainDataDisplayDiv>
        <h1>DATA</h1>
        <h3> Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>

        
        
        </MainDataDisplayDiv>
  )
}

export default MainDataDisplay