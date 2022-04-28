import styled from "styled-components";
import { COLORS, MYFONTS,HEADER } from "../../constants/theme";

export const LogInPageDiv = styled.div`
    display: grid; 
    height: 100vh;
    grid-template-rows: ${HEADER.size} 1fr; 
    background-color: ${COLORS.background}; 
    font-family: ${MYFONTS.title};


    
`

export const LogInPageCoreDiv = styled.div`
display: flex; 
flex-direction: column; 
color: ${COLORS.font}; 

align-items: center;
margin-top: 8%; 

@media(max-width:750px) {
        margin-top: 25%;
    }

h1{
    margin-bottom: 2.5rem;
    font-size: 3rem; 

    @media(max-width:750px) {
        font-size: 2.5rem;  
        margin-bottom: 2rem;
    }
}

p{
    color: red; 
    font-size: 1.5rem; 
    margin-top: -1.5%;
    margin-bottom: 1.5rem; 

    @media(max-width:750px) {
        font-size: 1rem;  
       
    }
}

Input {
    background-color: ${COLORS.primary};
    font-family: ${MYFONTS.body};
    color: ${COLORS.font}; 
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    width: 40%;
    
    @media(max-width:750px) {
        width:75%;
        font-size: 1rem;  
    }
    padding: 1.5% 1.5%;
   

    &:hover {
        background-color: ${COLORS.primaryPalette[700]}; 
    }

    &:focus {
        background-color: ${COLORS.primaryPalette[300]};
        
    }

}

Button {
    margin-top: 0.5rem;
    font-size: 1.75rem;
    padding: 1.5% 1.5%;

    @media(max-width:750px) {
        
        font-size: 1.25rem;
        padding: 1.5% 5%;
    }

}

`