import styled from "styled-components";

export const FormHeaderDiv = styled.div`
    display: flex; 
    flex-direction: row;
    background-color: #00b8e2; 
    height: 20vh; 
    width: 100vw; 
   

    form{
        width: 100%; 
        height: 100%;
        display: flex; 
        align-items: center;
        justify-content: center;
    }

    input{
        height: 28%; 
        width: 15%;
        margin-right: 2%; 
        border-radius: 3px; 
        border-color: none;
        border-width: 0px; 
        text-indent: 20px;
        font-size: 1.3rem;
        color: black;
        background-color: white;

        :focus{
            border:  0px; 
        }
        ::placeholder{
            color: #252525; 
            font-weight: 500;
        }
    }
    button {
        height: 28%; 
        width: 7%; 
        font-size: 1.5rem; 
        background-color:#00b8e2; 
        color: white;  
        font-weight: 600; 
        border: white solid 3px;
        border-radius: 2px;
        padding-top: 6px;
        padding-bottom: 6px;

        :hover{
            opacity: 0.8; 
        }
    }
    
`
