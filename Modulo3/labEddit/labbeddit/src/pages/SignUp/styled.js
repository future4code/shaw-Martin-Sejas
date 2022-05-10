import styled from "styled-components";
import { HEADER } from "../../constants/theme";

export const SignUpMainDiv = styled.div`
display: grid; 
grid-template-rows: ${HEADER.size} 1fr; 

`

export const SignUpContentDiv = styled.div`
display: flex; 
height: auto; 
min-height: 95vh; 
background-color: yellow; 

`