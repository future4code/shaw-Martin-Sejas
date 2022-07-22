import React from 'react'
import { TableRowFirstNameDiv, TableRowIdDiv, TableRowLastNameDiv, TableRowMainDiv, TableRowParticipationDiv } from './styled'

const TableRow = (props:any) => {
  return (
    <TableRowMainDiv>
        <TableRowIdDiv>{props.id}</TableRowIdDiv>
        <TableRowFirstNameDiv>{props.firstName}</TableRowFirstNameDiv>
        <TableRowLastNameDiv>{props.lastName}</TableRowLastNameDiv>
        <TableRowParticipationDiv>{props.participation}</TableRowParticipationDiv>
        </TableRowMainDiv>
  )
}

export default TableRow