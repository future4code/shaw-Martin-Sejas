import styled from "styled-components";
import { COLORS, HEADER, MYFONTS } from "../../constants/theme";
import "@fontsource/ibm-plex-sans/700.css";
import "@fontsource/noto-sans/400.css";
import "@fontsource/noto-sans/500.css";


export const SignUpMainDiv = styled.div`
display: grid; 
grid-template-rows: ${HEADER.size} 1fr; 

@media (min-width: 750px)
    {
        grid-template-rows: 10vh 1fr; 
    }

`

export const SignUpContentDiv = styled.div`
display: flex; 
flex-direction: column; 
height: auto; 
min-height: 95vh; 
width: 85%;
background-color: ${COLORS.background}; 

margin: 0 auto; 

h1 {
    font-family: ${MYFONTS.title}; 
    color: ${COLORS.font.headings}; 
    font-weight: 700; 
    font-size: 33px; 
    width: 100%;
  
    margin-top: 29px;
    margin-bottom: 4vh; 

    @media (min-height: 750px)
    {
      margin-bottom: 14vh; 
    }

    @media (min-width: 750px)
    {
       text-align: center; 
       font-size: 3.5rem; 
       margin-top: 10vh; 
       margin-bottom: 5vh; 
    }
}

`

export const SignUpFormDiv = styled.div`
display: flex; 
flex-direction: column; 
width: 100%; 
height: auto; 

@media (min-width: 750px)
    {
       justify-content: center;
       align-items: center;
      
       margin-top: 20px; 
    }


p{
    font-family: ${MYFONTS.body}; 
    color: ${COLORS.font.subHeadings}; 
    font-size: 14px; 
    font-weight: 400;
    max-width: 100%; 
    margin-top: 30px; 
    padding-left: 2px; 
    margin-bottom: 17px; 

    @media (min-height: 750px)
    {
     margin-top: 65px; 
    }

    @media (min-width: 750px)
    {
        font-size: 1rem;  
    }
}

    span{
        display:inline; 
        font-weight: 500; 
        color: ${COLORS.font.Header}; 
    }




#checkbox {
    font-family: ${MYFONTS.body}; 
    color: ${COLORS.font.subHeadings}; 
    font-size: 14px; 
    font-weight: 400;
    max-width: 100%; 

      @media (min-width: 750px)
    {
        font-size: 1rem;  
    }
   
    
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
    margin-top: 28px; 
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