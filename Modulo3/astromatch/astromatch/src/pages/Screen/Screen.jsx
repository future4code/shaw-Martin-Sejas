import React, {useState, useEffect} from "react";
import HomeScreen from "../HomeScreen/HomeScreen";
import MatchesScreen from "../MatchesScreen/MatchesScreen";
import { ScreenContainer } from "./style";
import Header from "../../components/Header/Header";
import { getProfileToChoose } from "../../services/requests";





export default function Screen() {

    let [currentPage, setCurrentPage] = useState("HomeScreen")
    let [profile, setProfile] = useState([]); 

    useEffect( () => {
       
    })

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
            renderedPage = <HomeScreen/>; 
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
    <button>Limpar Swipes e Matches</button>
    </ScreenContainer>
  )
}
