import styled from "styled-components";


export const MatchCardContainer = styled.div`

display: flex; 
align-items: center; 
color: black; 
width: 100%; 
min-height: 12%; 
height: 10.5%;
margin: 1.5% 0%; 
padding: 1% 0%; 
background-color: #eeeeee;

/* border-top: solid #bfbfbf  1px; 
border-bottom: solid #bfbfbf 1px;  */


&:hover{
    background-color: #e6e2e2;
}


img {
    height: 100%; 
    width: 15%;
    margin-left: 3%; 
    border-radius: 55% 55%; 
}

h3 {
    justify-self: left;
    padding-left: 5%; 
}
`