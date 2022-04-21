import React, {useState, useEffect} from "react"
import MatchCard from "../../components/MatchCard/MatchCard";
import { MatchesScreenContainer } from "./style"




 const MatchesScreen = (props) => {

  let [matches, setMatches] = useState([...props.matches]); 

  useEffect( () => {
    setMatches([...props.matches])
  }, [props.matches])

  

  let renderMatches = []; 

  if (matches.length > 0)
  {
   renderMatches = matches.map( (match) => {
      return( <MatchCard match = {match} key={match.id}></MatchCard>)
    })
  }

  return (
    <MatchesScreenContainer>
      <h2>Matches ({renderMatches.length})</h2>
        {renderMatches.length > 0 ? (renderMatches): <p>Olhe os perfis e ache o seu proximo amor!</p>}
    </MatchesScreenContainer>
  )
}

export default MatchesScreen;