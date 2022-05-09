import styled from "styled-components";
import { COLORS, HEADER, MYFONTS } from "../../constants/theme"

export const HomePageDiv = styled.div`
    display: grid; 
    height: 100vh;
    grid-template-rows: ${HEADER.size} 1fr; 
    background-color: ${COLORS.background}; 
    font-family: ${MYFONTS.title};
    
`

export const HomePageHeader = styled.div`
display: flex; 
align-items: center; 
justify-content: flex-end;


Button {
    font-size: 1.2rem; 
    width: 12vw;
    margin-right: 2%;

    @media (max-width:720px) {
        width: auto;
    }
}

`
export const HomePageMain = styled.div`
display: flex; 
flex-direction: column; 
align-items: center; 
justify-content: center; 
margin-top: -10%; 

h1 {
    font-size: 6.5rem;
    color: ${COLORS.font}; 
    padding-bottom: 1%;

    @media (max-width:720px) {
        margin-top: -20%;
        font-size: 5rem; 
        padding-bottom: 2vh;
    }
}

Button {
    font-weight: bold;
    font-size: 2rem; 
    padding: 2%; 

    @media (max-width:720px) {
        font-size: 1.8rem;
        padding: 28px 16px; 
    }
    
}


`