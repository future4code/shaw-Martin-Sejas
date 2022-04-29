import styled from "styled-components";
import { COLORS, MYFONTS} from "../../constants/theme";
export const CandidateCardDiv = styled.div`

display: flex; 
flex-direction: column; 
width: 25vw; 
min-height: 20vh; 
height: auto;

margin: 2% 3%;

@media (max-width: 750px)
{
    width: 95%;
    height: auto;
    padding: 10% 5%;
    margin-bottom: 10%;
}


padding: 2% 2%;

background-color: ${COLORS.primary}; 
color: ${COLORS.font}; 
border-radius: 12px;
box-shadow: 3px 3px 3px black;
font-family: ${MYFONTS.body}; 

h2 {
    text-align: center;
    margin-bottom: 5%;
    font-size: 1.5rem;
    font-weight: 700; 

    @media (max-width: 750px)
{
    font-size: 1.3rem;
}

}

p {
    font-size: 1.1rem;
    margin-bottom: 1%;

    @media (max-width: 750px)
{
    font-size: 1rem;
}
}

#candidateTextTitle {
    margin-top: 8%; 
    text-align: center; 
    font-style: italic; 
}

`

export const CandidateChoices = styled.div`

display: flex; 
width: 100%; 
margin-top: 10%; 
align-content: center;
justify-content: space-evenly; 

`