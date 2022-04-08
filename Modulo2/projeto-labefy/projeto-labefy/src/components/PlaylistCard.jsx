import React from "react";
import styled from "styled-components";
import axios from "axios";






export default class PlaylistCard extends React.Component {

    render(){
        return(

            <div> {this.props.name} </div>
        )
    }

}