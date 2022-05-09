import styled from "styled-components";
import { COLORS, MYFONTS } from "../../constants/theme";

export const HeaderMainDiv = styled.div`
display: flex; 
color: ${COLORS.font}; 
font-family: ${MYFONTS.title};
background-color: ${COLORS.background}; 
align-items: center; 




h1 {
    font-size: 2rem;
    padding-left: 0.7%
   
   
}

div {
    flex-grow:1; 
    display: flex; 
    align-items: center;
    justify-content: center;
    @media (max-width:720px) {
        width: auto;
    }
}

Button {
    font-size: 1.2rem; 
    width: 12vw;
    flex-grow: 0;
    margin: 0% 2%;

    @media (max-width:720px) {
        width: auto;
    }
}

`