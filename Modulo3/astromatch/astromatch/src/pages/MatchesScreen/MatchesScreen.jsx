import React, {useState, useEffect} from "react"
import { getMatches } from "../../services/requests";
import { MatchesScreenContainer } from "./style"



export default function MatchesScreen() {

  let [matches, setMatches] = useState({}); 

  useEffect( ()=> {
    getMatches(setMatches)
  }, [])

  let renderMatches; 

  if (matches.length > 0)
  {
   renderMatches = matches.map( (match) => {
      return( <li key={match.id}>{match.name}</li>)
    })
  }

  return (
    <MatchesScreenContainer>
        <ul>{renderMatches}</ul>
    </MatchesScreenContainer>
  )
}

