import styled from "styled-components";

export const ScreenContainer = styled.div`
    height: 95%; 
    width: 30%; 
    background-color: white; 
   
    border: #c8c5c5 solid 2px; 
   
    
    border-radius: 9px 9px 9px ; 
    padding-bottom: 0.05%;
    @media (max-width: 720px ) {
        height: 85%; 
        width: 90%; 
    }

    Button {
      height: 100%;
      padding-bottom: 1%;
      margin-bottom: 0.2%;
     
      
    }

    display: grid;
    grid-template-rows: 8% 1fr 5%;  
`