import styled from "styled-components";

export const ScreenContainer = styled.div`
    height: 80%; 
    width: 32%; 
   
    background-color: teal; 

    @media (max-width: 720px ) {
        height: 85%; 
        width: 90%; 
    }

    display: grid;
    grid-template-rows: 8% 1fr 5%;  
`