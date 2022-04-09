import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants/styling";

const SongCardContainer = styled.div`
    display: flex; 
    height: 8%;
    width: 85%; 
    background-color: ${COLORS.primary}; 
    margin-bottom: 0.7%; 
    align-items: center; 
    color: ${COLORS.fontPrimary};
    font-size: 1.2rem; 
    padding: 0.2% 1.5%; 
`
const SongNameContainer = styled.div`
    display:flex; 
    width: 40%;
    height: 100%; 
    justify-self: flex-start;
    align-items: center; 
    justify-content: flex-start;   
      
`

const ArtistNameContainer = styled.div`
    display:flex; 
    width: 30%;
    height: 100%; 
    align-items: center; 
    justify-content: flex-start;    
    
`

const ButtonsContainer = styled.div`
    display: flex; 
    width: 30%; 
    height: 100%; 
    align-items: center; 
    justify-content: space-between;

    button {
        height: 80%; 
       
    }
`
export default class SongCard extends React.Component {
    //Props
    // name = {track.name} 
    // artist={track.artist} 
    // url= {track.url}/>

    state = {
        isBeingPlayed: false,
    }

    render(){
        return(

            <SongCardContainer>
                <SongNameContainer>   {this.props.name} </SongNameContainer>
                <ArtistNameContainer>{this.props.artist}</ArtistNameContainer>
                <ButtonsContainer>
                    <button onClick={() => this.setState({isBeingPlayed: !this.state.isBeingPlayed})}>{this.state.isBeingPlayed? "Pause" : "Play"}</button>
                    <button onClick = {() => this.props.deleteSong(this.props.id)}>Remove</button>
                </ButtonsContainer>
            </SongCardContainer>
        )
    }

}