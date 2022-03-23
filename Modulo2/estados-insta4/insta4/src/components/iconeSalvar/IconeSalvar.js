import React, { Component } from "react";
import styled from 'styled-components'
import filledBookmark from '../../img/filled_bookmark.png'
import emptyBookmark from '../../img/empty_bookmark.png'

const IconeSalvarContainer = styled.div`
 height: 30px;
  width: 30px;
  padding-left: 150px; 
 
`

const MyBookmark = styled.img`

height: 30px;
  width: 30px;

`







export default class IconeSalvar extends Component{

    state = {
        saved: false,
        pictureUrl: this.props.pictureUrl
        
    }

    onClickBookmark = () => 
    {

       
        
        if (this.state.saved)
        {

            this.setState({
                saved: !this.state.saved,
                pictureUrl: emptyBookmark,
            });
        }

        else 
        {
            console.log("bookmarked")
            this.setState({
                saved: !this.state.saved,
                pictureUrl: filledBookmark,
            });

        }

    };

    render()
    {
        return (
            
                <IconeSalvarContainer>
                     <MyBookmark src= {this.state.pictureUrl} alt= {this.props.pictureAlt} onClick = {this.onClickBookmark} /> 
                     </IconeSalvarContainer>
          
        )
    }
}