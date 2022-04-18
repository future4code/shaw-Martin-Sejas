import React, {useState, useEffect} from "react";
import HomeScreen from "../HomeScreen/HomeScreen";
import MatchesScreen from "../MatchesScreen/MatchesScreen";
import { ScreenContainer } from "./style";
import Header from "../../components/Header/Header";





export default function Screen() {

    let [currentPage, setCurrentPage] = useState("HomeScreen")

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

  return (
    <ScreenContainer>
        <Header/>
        {renderedPage}
    <button onClick={changePage}>Limpar Swipes e Matches</button>
    </ScreenContainer>
  )
}
