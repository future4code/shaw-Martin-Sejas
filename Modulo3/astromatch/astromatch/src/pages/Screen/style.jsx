import styled from "styled-components";

export const ScreenContainer = styled.div`
    height: 80%; 
    width: 25%; 
    padding-bottom: 0.1%;
   
    border: black solid 3px; 
    border-radius: 9px 9px 9px ; 

    @media (max-width: 720px ) {
        height: 85%; 
        width: 90%; 
    }

    button {
        border-radius: 9px 9px 9px ; 
    }

    display: grid;
    grid-template-rows: 8% 1fr 5%;  
`