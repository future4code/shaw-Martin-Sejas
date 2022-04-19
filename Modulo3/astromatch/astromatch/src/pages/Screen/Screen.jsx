import React, {useState, useEffect} from "react";
import HomeScreen from "../HomeScreen/HomeScreen";
import MatchesScreen from "../MatchesScreen/MatchesScreen";
import { ScreenContainer } from "./style";
import Header from "../../components/Header/Header";
import { getProfileToChoose, choosePerson, clearMatches } from "../../services/requests";





export default function Screen() {

    let [currentPage, setCurrentPage] = useState("HomeScreen")
    let [profile, setProfile] = useState([]); 

    useEffect( () => {
       getProfileToChoose(setProfile)
    }, [])

    let processMatch = (id, choice) => {
        choosePerson(id,choice);
        getProfileToChoose(setProfile);
    }

    let clearEverything = () => {
       if( window.confirm("Você vai resetar o seu perfil completamente! \n \n Tem certeza que deseja resetar?"))
       {
         clearMatches(); 
       }
    }

    let changePage = () => {
        if(currentPage === "HomeScreen") 
        {
            setCurrentPage("MatchesScreen");
        }
        else {
            setCurrentPage("HomeScreen")
        }
    }



    let renderedPage; 
    switch (currentPage) {
        case "HomeScreen" : 
        {
            renderedPage = <HomeScreen profile= {profile}
                                       denyMatch= {() =>processMatch(profile.id, false)}
                                       acceptMatch = {() => processMatch(profile.id,true)}
                            />
            break; 
        }

        case "MatchesScreen":  
        {
            renderedPage = <MatchesScreen/> 
            break; 
        }

        default: 
        renderedPage = <HomeScreen/> 
    }

    console.log(profile)
  return (
    <ScreenContainer>
        <Header page= {currentPage} changePage = {changePage}/>
        {renderedPage}
    <button onClick={() => clearEverything()}>Resetar Perfil</button>
    </ScreenContainer>
  )
}
