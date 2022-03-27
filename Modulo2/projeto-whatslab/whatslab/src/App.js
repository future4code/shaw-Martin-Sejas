
import './App.css';
import styled from 'styled-components';
import React from 'react';
import ChatBox from './Components/ChatBox';


//Container principal
const AppContainer = styled.div`
display: flex; 
align-items: center; 
justify-content: center; 
width:100vw;
background-color: #015077;
background-color: rgb(38,55,104) ;
`

class App extends React.Component {

  render()
  {
    return (
      <AppContainer >
       <ChatBox/>
      </AppContainer>
    );

  }
}

export default App;
