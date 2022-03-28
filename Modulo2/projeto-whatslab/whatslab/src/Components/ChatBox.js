import React, { Children } from "react";
import styled from "styled-components";
import ChatMessage from "./ChatMessage";



//styling do container principal(Chatbox + inputs)
const ChatBoxContainer = styled.div`
display: flex; 
flex-direction: column; 
width: 70%; 
// se for celular ocupar mais largura da tela
@media only screen and (max-width: 600px) {
  width: 90%;
}

height: 100vh; 
//fundo do celular
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
  
  //Input para nome de usuario
  #Nome {
    width: 15%; 
    flex-grow: 0;   
    padding: 0.5%;
    margin-left: 0.5%; 
    margin-bottom: 1%; 
    border-radius: 0.5rem 0.5rem; 
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
  }

  //botão de submit
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
  //input para mensagem do usuario
  #Mensagem
  {
    margin-left: 0.5%; 
    margin-bottom: 1%; 
    border-radius: 0.5rem 0.5rem; 
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
    flex-grow: 1;
  }
`;

// classe principal
export default  class ChatBox extends React.Component {

  //state da class, string para usuario (no input) string para mensagem (no input)
  //Array de componentes <ChatMessage> (mensagens)
  //id para componentes <ChateMessage> e fazer um key para a lista
    state = {
      username: "", 
      message: "", 
      chatMessages: [],
      id: 0,
    }

    //Method para criar uma nova mensagem, recebendo informações dos inputs (usuario e mensagem)
   OnMessageSubmit() {
     //spread do array
        let updateMessage = [...this.state.chatMessages]; 

        //atualiza array com componente <ChatMessage> mandando as informações dos inputs como props
        updateMessage.push(
            <ChatMessage
            id={this.state.id}
            key= {this.state.id}
            userName= {this.state.username}
            myMessage = {this.state.message} 
            />
        )
          //Atualiza o novo state
            this.setState({chatMessages: updateMessage, username: "", message: "", id: this.state.id +1})

    }

    //Method para chamar a função de submit informações caso o usuario aperte 'Enter'
    pressedEnter = (e) => 
    {
        if (e.code === 'Enter')
        {
           this.OnMessageSubmit();
        }
    }


render () {

  //map da array chatMessages para renderizar
    const allMessages = this.state.chatMessages.map( (msg) => {
        return msg; 
    } )

    //return principal
    return (
            <ChatBoxContainer> {/* Div principal do chat + campos de input*/}
                 <MessagesContainer> {/* Container principal de mensagens*/}
                     {allMessages} {/* lista de mensagens*/}
                 </MessagesContainer>
     
                  <MessageInputContainer> {/* campos input para usuario, mensagem*/}
                 <input 
                 id='Nome'
                 placeholder='Usuario'
                 value = {this.state.username}
                 {/* Arrow function para o input atualizar quando o usuario digitar */}
                 onChange = { (event) => { this.setState({username: event.target.value})}}
                 /> 
                 <input 
                 id='Mensagem'
                 placeholder=' Mensagem'
                 value = {this.state.message}
                 onChange = { (event) => { this.setState({message: event.target.value})}}
                 onKeyDown = { this.pressedEnter }
                 /> 
                 <button {/* botão de enviar*/}
                 onClick={() => {this.OnMessageSubmit()}}
                 >Enviar</button>
       
               </MessageInputContainer> 
             </ChatBoxContainer>
         );
}
}