import styled from "styled-components";
import { COLORS, MYFONTS} from "../../constants/theme";


export const MissionCardDiv = styled.div`
display: flex; 
flex-direction: column; 
align-items: center; 
justify-content: space-evenly;
width: 30%; 
height: 40%; 

margin: 2% 3%;
padding-bottom: 2%;
background-color: ${COLORS.primary}; 
color: ${COLORS.font}; 
border-radius: 12px;
box-shadow: 3px 3px 3px black;
font-family: ${MYFONTS.body}; 

@media (max-width: 750px)
{
    width: 95%;
    height: 35%;
    margin-bottom: 10%;
}

&:hover{
    background-color: ${COLORS.primaryPalette[300]}
}

p {
    margin-bottom: 1.5%;
    font-size: 1.05rem; 
    /* margin-top: 5%;  */
    width: 90%;

    
    @media (max-width: 750px)
    {
        font-size: 0.905rem;
    }
    
    
}

span {
    font-weight: 700;
    font-size: 1rem; 
    @media (max-width: 750px)
    {
        font-size: 0.9rem;
    }
}

h2 {
    font-size: 1.5rem; 
    color: ${COLORS.secondaryPalette[600]};
    font-weight: bolder;
    margin-bottom: 3%;
    padding-top: 2%;
    text-overflow: ellipsis; 
    overflow: hidden;
    white-space: nowrap;

    @media (max-width: 750px)
    {
        text-overflow: clip; 
        overflow: hidden;
        white-space: nowrap;
        word-wrap: break-word;
        font-size: 1.2rem
    }

}

#description{
    min-height: 1.5rem;
    height: auto;
    max-height: 3rem;
    font-size: 1.1rem;
    margin-bottom: 3%;
    text-overflow: ellipsis; 
    overflow: hidden;
    white-space: pre-line;
    font-style: italic;
    font-weight: 500;
    padding-left: 2%;

    @media (max-width: 750px)
    {
        font-size: 1rem;
        margin-bottom: 2%;
        padding-bottom: 2%;
    }
}

`