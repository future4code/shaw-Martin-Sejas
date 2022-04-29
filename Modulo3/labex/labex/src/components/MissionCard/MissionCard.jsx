import React from 'react'
import { MissionCardDiv } from './styled'

function MissionCard(props) {

    //receive as props entire trip object
    // date: "21/12/20"
    // description: "Nenhum surfista intergalático pode ficar fora dessa!"
    // durationInDays: 540
    // id: "9yLjLKR40jMfqxsqmcgs"
    // name: "Surfando em Netuno"
    // planet: "Netuno"

  return (
    <MissionCardDiv>
        <h2> {props.trip.name} </h2>
        <p id= "description">  {props.trip.description} </p>
        <p> -> <span>Planeta:</span> {props.trip.planet} </p>
        <p> -> <span>Duração:</span> {props.trip.durationInDays} dias</p>
        <p> -> <span>Data:</span> {props.trip.date} </p>
    </MissionCardDiv>
  )
}

export default MissionCard