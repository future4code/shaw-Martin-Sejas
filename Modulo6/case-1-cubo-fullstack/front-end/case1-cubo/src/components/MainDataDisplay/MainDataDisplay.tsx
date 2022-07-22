import React, { useEffect, useState } from 'react'
import { getUsers } from '../../services/requests';
import { CuboUserData } from '../../Types/User';
import TableRow from '../TableRow/TableRow';
import { MainDataContainerDiv, MainDataDisplayDiv, MainTableDiv, PieChartDiv } from './styled'

type MainDataDisplayProps = {
    children: React.ReactNode; 
}

export const MainDataDisplay = (props:MainDataDisplayProps) => {

  let [users, setUsers] = useState([]); 
  let [totalParticipation, setTotalParticipation] = useState(0);

  useEffect(()=> {
    getUsers(setUsers,setTotalParticipation)
  },[users])

  let displayedUsers = users.map( (user:CuboUserData) => {
    let participationUser = (Math.floor((user.participation as number / totalParticipation) *100)).toString();
    return <TableRow id={user.id} 
                      key={user.id} 
                      firstName = {user.firstName}
                      lastName = {user.lastName}
                      participation = {`${participationUser}%`} />
  })
  
  return (
    <MainDataDisplayDiv>
        <h1>DATA</h1>
        <h3> Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>

        <MainDataContainerDiv>
          <MainTableDiv>
              <TableRow 
              id=""
              firstName="First Name"
              lastName = "Last Name" 
              participation = "Participation"/>
              {displayedUsers}

              
          </MainTableDiv>

          <PieChartDiv>
              sdfdsfdsf
          </PieChartDiv>
        </MainDataContainerDiv>
        
        
        </MainDataDisplayDiv>
  )
}

export default MainDataDisplay