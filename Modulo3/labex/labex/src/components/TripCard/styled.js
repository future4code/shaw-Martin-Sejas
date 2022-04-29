import styled from "styled-components";
import { COLORS, MYFONTS } from "../../constants/theme";

export const TripCardDiv = styled.div`
display: flex; 
height: 8vh; 
width: 100%; 
align-items: center;
justify-content: space-between; 
background-color: ${COLORS.primary};
color: ${COLORS.font}; 
margin-bottom: 1.5rem; 
font-family: ${MYFONTS.body}; 
border-radius: 16px; 
font-size: 1.5rem; 
box-shadow: 0px 3px 3px black;

@media(max-width:750px) {
        
        font-size: 0.9rem;
        height: 6vh;
        font-weight: 500;
    }

p{
    margin-left: 5%; 
    width: 60%;
}

#icon {
    margin-right: 5%;
    color: ${COLORS.secondaryPalette[400]};
    &:hover{
    opacity: 0.7;
    cursor: pointer;
    }

    @media(max-width:750px) {
        
        font-size: 1.2rem;
        
    }
}

#viewIcon {
    font-size: 1.75rem;
    color: white;

    &:hover{
        color: ${COLORS.secondaryPalette[700]};
        cursor: pointer;
    }

    @media(max-width:750px) {
        
        font-size: 1.2rem;
        
    }
}

&:hover{
    background-color: ${COLORS.primaryPalette[700]};
    
}

`