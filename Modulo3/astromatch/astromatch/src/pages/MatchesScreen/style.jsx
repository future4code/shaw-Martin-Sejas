import styled from "styled-components";
import { COLORS } from "../../constants/colors";

export const MatchesScreenContainer = styled.div`
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    justify-content: flex-start; 
    
    height: 100%; 
    width: 100%; 
    overflow-y: auto; 

    h2 {
        padding-top: 5%; 
        font-size: 1.6rem; 
        color: ${COLORS.primary};
        margin-bottom: 3%; 
        font-weight: 600; 
    }
`