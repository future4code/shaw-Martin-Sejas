import styled from "styled-components";
import { COLORS, HEADER, MYFONTS } from "../../constants/theme";
import "@fontsource/ibm-plex-sans/700.css";
import "@fontsource/noto-sans/400.css";
import "@fontsource/noto-sans/500.css";


export const PostMainDiv = styled.div`

display: grid; 
grid-template-rows: ${HEADER.size} 1fr; 

@media (min-width: 750px)
    {
        grid-template-rows: 10vh 1fr; 
    }

`


export const PostContentDiv = styled.div`
display: flex; 
flex-direction: column; 
width: 85%; 
margin: 0 auto; 
margin-top: 28px; 
`
