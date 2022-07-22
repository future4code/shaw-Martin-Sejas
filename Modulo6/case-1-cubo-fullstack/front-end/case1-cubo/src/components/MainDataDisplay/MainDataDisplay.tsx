import React, { useEffect, useState } from 'react'
import { VictoryPie } from 'victory';
import { deleteUsers, getUsers } from '../../services/requests';
import { CuboUserData } from '../../Types/User';
import TableRow from '../TableRow/TableRow';
import { MainDataContainerDiv, MainDataDisplayDiv, MainTableDiv, PieChartContainerDiv, PieChartDiv } from './styled'

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

  let pieChartData = users.map( (user:CuboUserData) => {
    let name = `${user.firstName} ${user.lastName}`; 
    let dataPoint = {x:name, y:user.participation, label: name}
    return dataPoint
  })



  const resetTable = async () => {
     await deleteUsers(); 
     getUsers(setUsers, setTotalParticipation)
  }
  
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

              <button onClick={()=>resetTable()}>RESET TABLE</button>


          </MainTableDiv>

          <PieChartDiv>
              <PieChartContainerDiv>
            {pieChartData.length > 0 ?     <VictoryPie
              data={pieChartData}
              innerRadius={80}
              colorScale="qualitative"
              labelPlacement={"perpendicular"}
              />: <span></span>}
              </PieChartContainerDiv>
          </PieChartDiv>
        </MainDataContainerDiv>
        
        
        </MainDataDisplayDiv>
  )
}

export default MainDataDisplay