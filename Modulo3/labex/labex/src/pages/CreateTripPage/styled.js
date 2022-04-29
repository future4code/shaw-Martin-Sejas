import styled from "styled-components";
import { COLORS, MYFONTS,HEADER } from "../../constants/theme";
import {Formik, Form, Field} from 'formik';

export const CreateTripPageDiv = styled.div`
    display: grid; 
    min-height: 100vh;
    height: auto;
    grid-template-rows: ${HEADER.size} 1fr; 
    background-color: ${COLORS.background}; 
    font-family: ${MYFONTS.title};

    
`

export const CreateTripPageCoreDiv = styled.div`


    display: flex; 
    flex-direction: column; 
    color: ${COLORS.font}; 

    align-items: center;
    margin-top: 1%; 
    

    @media(max-width:750px) { 
            margin-top: 5%;
        }

    h1{
      
        font-size: 2.5rem; 

        @media(max-width:750px) {
            font-size: 1.8rem;  
            margin-bottom: 0.5rem;
        }
    }

    Input {
    background-color: ${COLORS.primary};
    font-family: ${MYFONTS.body};
    color: ${COLORS.font}; 
    font-size: 1.2rem;
    width: 100%;
    
    @media(max-width:750px) {
        width:100%;
        font-size: 1rem;  
    }
    padding: 1.5% 1.5%;
   

    &:hover {
        background-color: ${COLORS.primaryPalette[700]}; 
    }

    &:focus {
        background-color: ${COLORS.primaryPalette[300]};
        
    }
}

Form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    @media(max-width:750px) {
        width:85%;
       
    }

    .field{
        padding-bottom: 2%;

        @media(max-width:750px) {
        padding-bottom: 6%;
       
    }
        
    }

    .formLabel{
        font-size: 1.1rem;
    }
    
}

    Button {
    font-size: 1.25rem;
    padding: 3% 3%;
   
    margin-bottom: 2%;
    

    @media(max-width:750px) {
        margin-top: 0rem;
        margin-bottom: 1.5rem;
        font-size: 1.25rem;
        padding: 1.5% 5%;
    } 

}


`

