import styled from "styled-components";

export const HomeScreenContainer = styled.div`
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    color: white; 
    
    
`

export const MainCardContainer = styled.div`
width: 90%; 
height: 85%; 
margin: 5% 0%; 
display: flex; 
flex-direction: column; 
justify-content: flex-end; 
border-radius: 3% 3%; 
text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
color: white; 

div {
    padding: 5%; 
    width: 100%; 
    align-items: center; 

    p {
        font-size: 1.1rem; 
    }
}

   
`

export const SwipeContainer = styled.div`
    display: flex; 
    width: 100%; 
    height: 20%; 

    align-items: center; 
    justify-content: space-around;

   @keyframes expand {
       from {
        height: 60%; 
        width: 30%;
       }

       to {
        height: 70%; 
        width: 40%;
       }
   }

   

    img {
        
        height: 60%; 
        width: 30%;

        &:hover {
            animation-name: expand; 
            animation-duration: 1s; 
            height: 70%; 
            width: 40%;
        }
     
    }
`