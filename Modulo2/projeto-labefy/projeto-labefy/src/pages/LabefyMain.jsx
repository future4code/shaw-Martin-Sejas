import React from "react";
import styled from "styled-components";
import axios from "axios";
import { COLORS } from "../constants/styling";
import Playlists from "./Playlists";
import PlaylistContent from "./PlaylistContent";


const LabMainContainer = styled.div`

display: flex; 
flex-grow: 1; 
width: 100%; 
background-color: ${COLORS.secondary};
`




export default class LabefyMain extends React.Component {

    render(){
        return(

            <LabMainContainer>
            <Playlists>

            </Playlists>

            <PlaylistContent>
                
            </PlaylistContent>

            </LabMainContainer>
        )
    }

}