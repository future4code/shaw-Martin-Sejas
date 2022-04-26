import styled from "styled-components";
import { COLORS, MYFONTS,HEADER } from "../../constants/theme";

export const ErrorPageDiv = styled.div`
    display: grid; 
    height: 100vh;
    grid-template-rows: ${HEADER.size} 1fr; 
    background-color: ${COLORS.background}; 
    font-family: ${MYFONTS.title};

    div {
        display: flex; 
        justify-content: center; 
        align-items: center; ; 
        color: ${COLORS.font}; 
        font-size: 2rem; 
    }
    
`