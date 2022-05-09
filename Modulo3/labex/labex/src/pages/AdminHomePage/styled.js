import styled from "styled-components";
import { COLORS, MYFONTS,HEADER } from "../../constants/theme";

export const AdminHomePageDiv = styled.div`
    display: grid; 
    min-height: 100vh;
    grid-template-rows: ${HEADER.size} 1fr; 
    background-color: ${COLORS.background}; 
    font-family: ${MYFONTS.title};
    
`
export const AdminHomePageCoreDiv = styled.div`

    display: flex; 
    flex-direction: column; 
    color: ${COLORS.font}; 

    align-items: center;
    margin-top: 4%; 

    @media(max-width:750px) { 
            margin-top: 25%;
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

export const MissionNameList = styled.div`
    display: flex; 
    flex-direction: column; 
    margin-top: 3%; 
    overflow-y: auto; 
    width: 40%; 

    @media(max-width:750px) {
        margin-top: 10%;
        width: 85%;
    }
    
   
`