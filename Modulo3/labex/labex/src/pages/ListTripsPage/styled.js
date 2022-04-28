import styled from "styled-components";
import { COLORS, MYFONTS,HEADER } from "../../constants/theme";

export const ListTripsPageDiv = styled.div`
    display: grid; 
    min-height: 100vh;
    height: auto;
    grid-template-rows: ${HEADER.size} 1fr; 
    background-color: ${COLORS.background}; 
    font-family: ${MYFONTS.title};

    @media (max-width: 750px)
    {
        
        height: auto;
        
    }

   
  
    
`

export const ListTripsPageCoreDiv = styled.div`

    display: flex; 
    flex-direction: column; 
    color: ${COLORS.font}; 
    height: max-content;
    align-items: center;
    margin-top: 4%; 

    @media(max-width:750px) {
            padding-top: 15%;
            height: max-content;
        }

    h1{
        margin-bottom: 2.5rem;
        font-size: 3rem; 

        @media(max-width:750px) {
            font-size: 1.8rem;  
            margin-bottom: 2rem;
        }
    }

    Button {
    margin-top: 0.5rem;
    font-size: 1.75rem;
    padding: 1.5% 1.5%;

    @media(max-width:750px) {
        margin-top: 0rem;
        margin-bottom: 0.5rem;
        font-size: 1.25rem;
        padding: 1.5% 5%;
    }

}
`

export const MissionListDiv = styled.div`
    display: flex; 
    flex-direction: row; 
    justify-content: center; 
    margin-top: 3%; 
    width: 100%; 
    height: 100%;

    flex-wrap: wrap;

    @media(max-width:750px) {
        margin-top: 10%;
        width: 85%;
    }
    
`