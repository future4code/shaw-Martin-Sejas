import React, { Children } from "react";
import styled from "styled-components";
import ChatMessage from "./ChatMessage";



//styling of main container (Chatbox + inputs)
const ChatBoxContainer = styled.div`
display: flex; 
flex-direction: column; 
width: 70%; 
@media only screen and (max-width: 600px) {
  width: 90%;
}

height: 100vh; 
/* background-color: grey; */
background-image: url("https://wallpapercave.com/wp/wp4410822.jpg");
background-size: cover;
border-left: 0.1vw black solid; 
border-right: 0.1vw black solid; 
border-top:  0.1vw black solid; 
border: 0.1rem rgb(255,255,255,0.1) solid; 
justify-content: center; 
align-items: center;

`

//styling of container containing messages
const MessagesContainer = styled.div` 
 display: flex; 
 flex-direction: column; 
 width: 100%;
 height: 95%; 
 overflow-y: auto; 
`
//styling of container in charge of receiving input
const MessageInputContainer = styled.div`

  display:flex;
  width:100%; 
  height: 5%; 
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
  
  
  #Nome {
    width: 15%; 
    flex-grow: 0;   
    padding: 0.5%;
    margin-left: 0.5%; 
    margin-bottom: 1%; 
    border-radius: 0.5rem 0.5rem; 
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
    
  }

  button 
  {
    padding-left: 2%; 
    border-radius: 0.5rem 0.5rem; 
    padding-right: 2%;
    flex-grow: 0; 
    margin-left: 0.3%; 
    margin-right:0.5%;
    margin-bottom: 1%; 
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
  }
  #Mensagem
  {
    margin-left: 0.5%; 
    margin-bottom: 1%; 
    border-radius: 0.5rem 0.5rem; 
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
    flex-grow: 1;
  }
`;

// applies styling to the messages and has the list of messages
export default  class ChatBox extends React.Component {

    state = {
      username: "", 
      message: "", 
      sampleMessages: [],
      id: 0,
    }

   OnMessageSubmit() {
        let updateMessage = [...this.state.sampleMessages]; 

        updateMessage.push(
            <ChatMessage
            id={this.state.id}
            key= {this.state.id}
            userName= {this.state.username}
            myMessage = {this.state.message} 
            />
        )
          
            this.setState({sampleMessages: updateMessage, username: "", message: "", id: this.state.id +1})

    }

    pressedEnter = (e) => 
    {
        if (e.code === 'Enter')
        {
           this.OnMessageSubmit();
        }
    }


render () {

    const allMessages = this.state.sampleMessages.map( (msg) => {
        return msg; 
    } )

    console.log(allMessages)
    return (
            <ChatBoxContainer> 
                 <MessagesContainer>
                     {allMessages}
                 </MessagesContainer>
     
                  <MessageInputContainer>
                 <input 
                 id='Nome'
                 placeholder='Usuario'
                 value = {this.state.username}
                 onChange = { (event) => { this.setState({username: event.target.value})}}
                 /> 
                 <input 
                 id='Mensagem'
                 placeholder=' Mensagem'
                 value = {this.state.message}
                 onChange = { (event) => { this.setState({message: event.target.value})}}
                 onKeyDown = { this.pressedEnter }
                 /> 
                 <button
                 onClick={() => {this.OnMessageSubmit()}}
                 >Enviar</button>
       
               </MessageInputContainer> 
             </ChatBoxContainer>
         );
}
}