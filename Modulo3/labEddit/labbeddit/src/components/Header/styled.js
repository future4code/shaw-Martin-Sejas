import styled from "styled-components";
import { COLORS, MYFONTS } from "../../constants/theme";
import "@fontsource/noto-sans/600.css";

export const HeaderMainDiv = styled.div`

display: flex; 
background-color: ${COLORS.backgroundSecondary}; 
color: ${COLORS.font.Header}; 
align-items: center; 
height: 100%;

justify-content: space-between; 

img {
    height: 55%; 
}

Button {
    color: ${COLORS.font.Header}; 
    font-family: ${MYFONTS.body}; 
    font-weight: 600; 
    font-size: 18px; 

    @media (min-width: 750px)
    {
        font-size: 1.8rem; 
    }

    
}

#rightButton{
    margin-right: 29px; 
    @media (min-width: 750px)
    {
        margin-right: 5%; 
    }
}

span {
    margin-left: 29px; 
    color: ${COLORS.backgroundSecondary}; 
    font-family: ${MYFONTS.body}; 
    font-weight: 600; 
    font-size: 18px; 

    @media (min-width: 750px)
    {
        font-size: 1.8rem; 
        margin-left: 5%; 
    }
    
}

`