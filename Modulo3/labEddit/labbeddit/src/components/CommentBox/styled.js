import styled from "styled-components";
import { COLORS, MYFONTS } from "../../constants/theme";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/700.css";
import "@fontsource/noto-sans/400.css";
import "@fontsource/noto-sans/500.css";



export const CommentMainDiv = styled.div`

width: 100%; 
height: max-content; 
background-color: ${COLORS.backgroundPost}; 
border-radius: 12px; 
padding: 9px 10px; 
border: solid ${COLORS.borderPost} 1px; 
display:flex; 
flex-direction: column; 
margin-bottom: 10px; 


`

export const CommentUserNameDiv = styled.div`
width: 100%; 
height: 25%; 
font-family: ${MYFONTS.title}; 
font-size: 12px; 
font-weight: 400; 
flex-grow: 0; 
color: ${COLORS.font.secondary}; 

`

export const CommentBodyDiv = styled.div`
width: 100%; 
flex-grow: 1;
font-family: ${MYFONTS.title}; 
font-size: 18px; 
font-weight: 500; 
color: ${COLORS.font.subHeadings}; 
padding: 18px 0; 


p {
    font-weight: 400; 
    font-size: 16px; 

    padding-top: 15px; 
}

`

export const CommentInteractionDiv = styled.div`
width: 100%;
height: 40%; 
display: flex; 
align-items: center; 
justify-content: flex-start; 
font-family: ${MYFONTS.title}; 
font-size: 12px; 
font-weight: 400; 
flex-grow: 0; 
`
export const CommentUpvoteDiv = styled.div`
display: flex; 
padding:5px; 
border: 1px solid #ECECEC;
border-radius: 28px;
margin-right: 10px; 

p {
    padding: 0px 15px; 
    font-family: ${MYFONTS.title};
    font-weight: 500; 
}

#upvoteIcon{
    align-self: flex-start; 
    padding-left: 5px;

    &:hover{
        cursor: pointer
    }
}

#downvoteIcon{
    align-self: flex-end; 
    padding-right: 5px;

    &:hover{
        cursor: pointer
    }
}

`
