import React, {
    Component
} from "react";
import styled from 'styled-components'
import ShareButton from '../../img/share_button.png'


const ShareButtonContainer = styled.div `
 height: 30px;
  width: 30px;
  display: flex; 
  flex-direction:column; 
  align-items: center;
  justify-items: center;  

  padding-bottom: 80px;
  padding-left: 140px; 

  div 
  {
      display: flex; 

  }

  input 
  {
      width: 200px;
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