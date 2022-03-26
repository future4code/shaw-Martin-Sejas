import React, { Children } from "react";
import styled from "styled-components";
import ChatMessage from "./ChatMessage";

//styling of main container (Chatbox + inputs)
const ChatBoxContainer = styled.div`
display: flex; 
flex-direction: column; 
width: 45%; 
height: 100vh; 
background-color: grey;
border-left: 0.1vw black solid; 
border-right: 0.1vw black solid; 
border-top:  0.1vw black solid; 
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

//message itself is already styled
render () {

    // MAKE ARRAY WITH ID AND <ChatMessage>, USE FILTER TO DISPLAY JUST <ChatMessage> for best practice
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