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

@media (min-width: 750px)
    {
        width: 30%; 
    }

`


export const PostSubmitCommentDiv = styled.div`

display: flex; 
flex-direction: column; 
width: 100%; 
margin: 0 auto; 

@media (min-width: 750px)
    {
        width: 100%; 
    }


.postBody{
    margin-top: 12px; 
    width: 100%; 
    height: 15vh;
    max-height: 35vh; 
    background-color: ${COLORS.backgroundSecondary}; 
    border-radius: 12px; 
    font-family: ${MYFONTS.title}; 
    font-size: 18px; 
    color: '#323941';

    @media (min-width: 750px)
    {
        height: 20vh;
    }
}


Button {
    margin-top: 12px; 
    width: 100%; 
    height: 47px; 
    padding: 12px 145px; 
    justify-self: center; 
    background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
    border-radius: 12px;
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

hr {
    height: 1px; 
   /* color: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%); */
   background-image: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
}

`


export const PostCommentsDiv = styled.div`
width: 100%;
height: auto; 

display: flex; 
flex-direction: column; 
margin: 0 auto; 
margin-top: 36px;

#noComments 
{
    text-align: center; 
    font-family: ${MYFONTS.title}; 
    font-size: 16px; 
    color: '#323941';
    font-style: italic;
    opacity: 0.7; 
}

@media (min-width: 750px)
    {
        width: 100%; 
    }

   

`
