import styled from "styled-components";
import { COLORS, MYFONTS,HEADER } from "../../constants/theme";

export const TripDetailsPageDiv = styled.div`
    display: grid; 
    min-height: 100vh;
    height: auto;
    grid-template-rows: ${HEADER.size} 1fr; 
    background-color: ${COLORS.background}; 
    font-family: ${MYFONTS.title};

 
`

export const TripDetailsPageCoreDiv = styled.div`

    display: flex; 
    height: auto;
    flex-direction: column; 
    color: ${COLORS.font}; 
    font-size: 1.3rem;
    align-items: center;
    margin-top: 4%; 


    @media(max-width:750px) { 
            margin-top: 5%;
            margin-right: 2%; 
            margin-left: 2%; 
        }

    h1{
        margin-bottom: 1rem;
        font-size: 2.2rem; 

        @media(max-width:750px) {
            font-size: 1.5rem;  
            margin-bottom: 2rem;
        }
    }

    .tituloCandidato{
        margin-bottom: 2.5rem;
        font-size: 2rem; 

        span{
           
            font-size: 2.4rem;
            @media(max-width:750px) {
            font-size: 1.6rem;  
            
        }
        }

        @media(max-width:750px) {
            font-size: 1.3rem;  
            margin-bottom: 2rem;
        }
    }

    #missionCard {
        max-width: 70%;
        background-color: red;
        @media(max-width:750px) {
            font-size: 1.8rem;  
            margin-bottom: 2rem;
        }
    }

    /* Button {
    margin-top: 0.5rem;
    font-size: 1.75rem;
    padding: 1.5% 1.5%;

    @media(max-width:750px) {
        margin-top: 0rem;
        margin-bottom: 0.5rem;
        font-size: 1.25rem;
        padding: 1.5% 5%;
    } */

  

}
`


export const ApprovedCandidateDiv = styled.div`

background-color: ${COLORS.primary}; 
color: ${COLORS.font}; 
font-family: ${MYFONTS.body}; 
display: flex; 
flex-direction: column; 
font-size: 1.5rem;  
width: 25%;
box-shadow: 3px 3px 3px black; 
border-radius: 12px; 
padding: 1% 0%;
padding-left: 3%;
margin-top: -1%;
margin-bottom: 1%;



#emptyMessage {
    font-style: italic;
    color: ${COLORS.secondaryPalette[700]};

    @media(max-width: 750px) 
    {
      font-size:1rem;
    }
}

@media(max-width: 750px) 
{
    font-size: 1rem;
    width: auto;
    margin-top: -2%; 
    max-width: 90%; 
    padding: 5% 3%; 
    margin-bottom: 5%; 
}


`

export const CandidateListDiv = styled.div`
    display: flex; 
    flex-direction: row; 
    justify-content: center; 
    margin-top: 2%;
    width: 100%; 
    height: max-content;

    flex-wrap: wrap;

    @media(max-width:750px) {
        margin-top: 0%;
        width: 85%;
    }
    
`