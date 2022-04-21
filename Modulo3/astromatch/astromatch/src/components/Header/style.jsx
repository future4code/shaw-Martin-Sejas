import styled from "styled-components";
import {COLORS} from '../../constants/colors'

export const HeaderContainer = styled.div`
    display: flex; 
    align-items: center; 
    justify-content: space-between;
    border-bottom: solid #a19f9f 1px; 
    

    div {
        display: flex; 
        align-items: center; 
        width: 40%;
        height: 100%; 
        
        display: flex; 
        justify-content: flex-start; 
        margin-left: 1%;
        padding-left: 2%;  
        h2 {
        font-family: Helvetica,  sans-serif;
        color: #3f3d3d; 
        font-size: 1.4rem;
        font-weight: 700;
        padding-left: 5%; 
        }

        span {
           
            font-size: 1.4rem; 
        }

        #match {
            color: ${COLORS.primary}; 
        }
    }

    Button {
        height:100%; 
        width: 30%; 
        border-radius: 0px 9px 0px 0px;
        @media (max-width: 720px ) {
        
        border-radius: 0px 0px 0px 0px; 
    }
        background-color: ${COLORS.primary};
        color: white; 

        &:hover{
            background-color: #d632ab
        }

        &:active{
            border: none;
            outline: 0px; 
        }
    }

    
`