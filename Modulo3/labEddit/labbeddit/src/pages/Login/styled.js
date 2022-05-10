import styled from "styled-components";
import {COLORS, MYFONTS} from '../../constants/theme';
import "@fontsource/ibm-plex-sans/700.css";
import "@fontsource/noto-sans/700.css";
import "@fontsource/ibm-plex-sans";


export const MainLoginPageDiv = styled.div`

display: flex; 
min-height: 100vh; 
width: 100%; 
flex-direction: column; 


align-items: center; 
justify-content: flex-start; 

background-color: ${COLORS.background}; 

img {
    margin-top: 10vh; 
    @media (min-width: 750px)
    {
         
       margin-top: 20px; 
    }
}

h1{
    font-family: ${MYFONTS.title}; 
    font-size: 36px; 
    font-weight: 700;  
    font-style: normal; 
    color: ${COLORS.font.headings}; 
}

h3 {
    font-family: ${MYFONTS.title}; 
    font-size: 1rem; 
    text-align: center; 
}

Button{
    margin-top: 56px; 
    width: 85%; 
    border-radius: 27px; 
    margin-top: 18px; 
    height: 51px; 
    padding: 13px 133px; 
    justify-self: center; 
    font-family: ${MYFONTS.body}; 
    font-weight: 700; 
    margin-bottom: 2rem; 

    @media (min-width: 750px)
    {
        width: 30%; 
        margin-bottom: 5vh; 
       
    }
   
}

`

export const LoginFormDiv = styled.div`
display: flex; 
flex-direction: column; 
width: 85%; 
margin-top: 92px; 
height: auto; 

@media (min-width: 750px)
    {
       justify-content: center;
       align-items: center;
      
       margin-top: 20px; 
    }


p{
    font-family: ${MYFONTS.body}; 
    color: red; 
    text-align: center;
}

hr {
    height: 1px; 
   /* color: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%); */
   background-image: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
}


.loginInput {
    width: 100%; 
    height: 60px; 
    border-radius: 4px; 
    margin-top: 8px; 
    font-family: ${MYFONTS.body}; 

    @media (min-width: 750px)
    {
        width: 100%; 
       
    }
}

Button {
    margin-top: 56px; 
    width: 100%; 
    height: 51px; 
    padding: 13px 133px; 
    justify-self: center; 
    background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
    border-radius: 27px;
    color: ${COLORS.font.buttonAlternative}; 
    margin-bottom: 18px; 

    &:focus{
        background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
        opacity: 0.8; 
    }

    @media (min-width: 750px)
    {
         
        align-self: center; 
        justify-self: center; 
       
    }
}



`