import React, {
    Component
} from "react";
import styled from 'styled-components'
import ShareButton from '../../img/share_button.png'


const ShareButtonContainer = styled.div `

  display: flex; 
  flex-direction:column; 
  align-items: center;
  justify-items: center;  
  padding-bottom: 2%;
  padding-top: 5%;
  border-top: double 3px black; 
  background-color: beige;
 

  div 
  {
      display: flex; 
     width: 90%;
      

  }

  input 
  {
      width: 90%;
      
  }

  button {
     
      text-align: center;
      width: 20vw; 
  }
 
`


export default class IconeCompartilhar extends Component {

    state = {
        sharedMessage: " Digite a sua mensagem!",
    }


    onClickShareFacebook = () => {
        console.log( "Post compartilhado no Facebook com a mensagem: "+ this.state.sharedMessage); 
    };

    onClickShareTwitter = () => {
        console.log( "Post compartilhado no Twitter com a mensagem: "+ this.state.sharedMessage);  
    };


    onClickShareInstagram = () => {
        console.log( "Post compartilhado no Instagram com a mensagem: "+ this.state.sharedMessage);
    };

    getShareMessage = (event) => 
    {   
        this.setState({
            sharedMessage: event.target.value,
        })
    }

    render() {
        return (

            <ShareButtonContainer >
            <div> 
                 <button title = "Facebook" onClick = { this.onClickShareFacebook}> Facebook </button> 
                 <button title = "Twitter" onClick = { this.onClickShareTwitter}> Twitter </button> 
                 <button title = "Instagram" onClick = { this.onClickShareInstagram} > Instagram </button> 
             </div> 
            <br/>
            <input value={this.state.sharedMessage} onChange= {this.getShareMessage}></input>
            </ShareButtonContainer >

        )
    }
}