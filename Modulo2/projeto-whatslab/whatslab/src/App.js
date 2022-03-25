import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';


//Container principal
const AppContainer = styled.div`
display: flex; 
align-items: center; 
justify-content: center; 
width:100vw;
`

//container do aplicativo principal
const MainContainer = styled.div`
display: flex; 
flex-direction: column; 
width: 45%; 
height: 100vh; 
background-color: beige;
border-left: 0.1vw black solid; 
border-right: 0.1vw black solid; 


justify-content: center; 
align-items: center;

`

//container chatbox

const ChatBoxContainer = styled.div` //to be applied later on separate component
 display: flex; 
 flex-direction: column; 
 width: 100%;
 height: 95%; 
 overflow-y: auto; 
`

const SendMessageContainer = styled.div`

  display:flex;
  width:100%; 
  height: 4.2%; 
  box-shadow:1px 1px 1px; 
  
  

  #Nome {
    width: 18%; 
    flex-grow: 0; 
    
  }

  button 
  {
    padding-left: 2%; 
    padding-right: 2%;
    flex-grow: 0; 
  }

  #Mensagem
  {
    flex-grow: 1;
  }
`





function App() {
  return (
    <AppContainer >

      <MainContainer>

        <ChatBoxContainer>
        Texto
        </ChatBoxContainer>

        <SendMessageContainer>
          <input 
          placeholder='Nome'
          id='Nome'
          /> 
          <input placeholder='Mensagem'
          id='Mensagem'
          /> 
          <button>Enviar</button>

        </SendMessageContainer>
       
      </MainContainer>
     
    </AppContainer>
  );
}

export default App;
