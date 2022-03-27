import React from "react";
import styled from "styled-components";

const ChatMessageContainer = styled.div`
display: flex; 
flex-direction: column; 
justify-self: flex-end;
align-self: flex-start;

max-width: 40%;
min-width:20%;
border: 0.01rem solid black;
background-color: rgba(255, 255,0, 0.2);
background-color: #094132; 
 
color: white;
padding: 0.9em 0.8em;
border-radius: 0.5em;
font-weight: 450;
line-height: 1.3;
box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
margin-bottom: 2%;
margin-left: 1%; 

h4 {
  
    color: #9AAC8C;
    color: rgba(255, 255,255, 0.65);
    padding-left: 3%;  
    font-size: 1.1em;
    font-weight: 600;
    margin-bottom: 0.2em;
}

p {
    padding: 3%;  
}
`

const OwnMessageContainer = styled.div`
display: flex; 
flex-direction: column; 
align-self: flex-end;
justify-content: flex-end; 
justify-self: flex-end;
background-color: #93bb72;
padding: 0.9em 0.8em;
border-radius: 0.5em;
font-weight: 450;
line-height: 1.3;
max-width: 40%;
min-width: 15%;
margin-right: 1%;
border: 2px solid black;
box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
margin-bottom: 2%;
margin-left: 1%; 
color: black;
font-weight: bolder; 

p {
    padding: 5%; 
}
`


export default class ChatMessage extends React.Component {
    // State para decidir se mostrar mensagem ou n
    state = {
        showMessage: true,
    }

   //funcao de deletar msg 
  deleteMessage = () => 
  {
        if(window.confirm("Do you want to delete this message?"))
        {
            this.setState({showMessage: false})
        }
  }

    render() {

       // se showMessage for true
       if (this.state.showMessage) 
            {
                // se tiver usuario, mostra nome e joga pra esquerda
                if (this.props.userName!== "") 
                {
                    return (
                        <ChatMessageContainer onDoubleClick={this.deleteMessage}>
                        <h4> {this.props.userName}</h4>
                         <p> {this.props.myMessage}</p>
                        </ChatMessageContainer>
                    )
                }
                // se nao tiver, a mensagem eh minha, joga para direita sem usuario
                else 
                {
                    return (
                        <OwnMessageContainer onDoubleClick={this.deleteMessage} >
                        <p>{this.props.myMessage}</p>
                        </OwnMessageContainer>

                    )
                }    
            }
        else{ // se showMessage for falso, mostra nada
            return(
                <span></span>
            )
        }
                 
    }
}