import styled from "styled-components";

export const ScreenContainer = styled.div`
    height: 80%; 
    width: 25%; 
   
   
    border: black double 6px; 
    border-radius: 9px 9px 9px ; 

    @media (max-width: 720px ) {
        height: 85%; 
        width: 90%; 
    }

    display: grid;
    grid-template-rows: 8% 1fr 5%;  
`