import styled from "styled-components";

export const MainDataDisplayDiv = styled.div`
min-height: 80vh;
height: auto;
width: 100vw;     
display: flex; 
flex-direction: column; 
align-items: center; 

h1{
    padding-top: 50px;
    font-size: 40px; 
}

h3{
    font-weight: 300; 
    margin-top: -5px; 
}


`

export const MainDataContainerDiv = styled.div`
    width: 100%; 
    min-height:100%;
    display: flex; 
    align-items: center;
    

`

export const MainTableDiv = styled.div`
    display: flex;
    flex-direction:column;
    width: 50%; 
    min-height:100%; 
    align-items: center;
    justify-content: center;

    button{
        margin-top: 40px;
    }

`

export const PieChartDiv = styled.div`
    display: flex; 
    width: 50%; 
    height:100%; 
    align-items: center;
    justify-content: center;
`

export const PieChartContainerDiv = styled.div`
    display:flex; 
    max-width: 80%; 
    max-height: 50%; 
    align-items: center;
    justify-content: center;

`