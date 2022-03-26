import React from "react";
import styled from "styled-components";

const ChatMessageContainer = styled.div`
display: flex; 
flex-direction: column; 
width: 40%;
border: 2px solid black;
background-color: blue;

border-radius: 25% 25% 25% 5%;
box-shadow: 2px 2px 2px;
padding: 0.5%; 
margin-bottom: 2%;
margin-left: 1%; 

h4 {
    font-weight: bolder;
    padding: 3%;
    padding-bottom: 0%;
   
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
background-color: green;
width: 40%;
border: 2px solid black;
border-radius: 25% 25% 5% 25%;
box-shadow: 2px 2px 2px;
padding: 0.5%; 
margin-bottom: 2%;
margin-left: 1%; 

p {
    padding: 5%; 
}

`


export default class ChatMessage extends React.Component {

   
    state = {
        showMessage: true,

    }

    
  deleteMessage = () => 
  {
        if(window.confirm("Do you want to delete this message?"))
        {
            this.setState({showMessage: false})
        }
  }

    
  

    render() {

     

       
       if (this.state.showMessage) 
            {
                

                if (this.props.userName!== "") 
                {
                    return (
                        <ChatMessageContainer onDoubleClick={this.deleteMessage}>
                        <h4> {this.props.userName}</h4>
                         <p> {this.props.myMessage}</p>
                        </ChatMessageContainer>
                    )
                }

                else 
                {
                    return (
                        <OwnMessageContainer onDoubleClick={this.deleteMessage} >
                        <p>{this.props.myMessage}</p>
                        </OwnMessageContainer>

                    )
                }
               
             
            }
        else{
            return(
                <span></span>
            )
        }
           

       
    }
}