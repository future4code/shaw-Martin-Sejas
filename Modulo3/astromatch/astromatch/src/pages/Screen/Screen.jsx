import React, {useState, useEffect} from "react";
import HomeScreen from "../HomeScreen/HomeScreen";
import MatchesScreen from "../MatchesScreen/MatchesScreen";
import { ScreenContainer } from "./style";
import Header from "../../components/Header/Header";
import { getProfileToChoose, choosePerson, clearMatches, getMatches } from "../../services/requests";
import { Button } from "@chakra-ui/react";
import {DeleteIcon} from '@chakra-ui/icons'


export default function Screen() {

    //state variables
    let [currentPage, setCurrentPage] = useState("HomeScreen")
    let [profile, setProfile] = useState([]); 
    let [matches, setMatches] = useState([]); 
    let [matchNumber, setMatchNumber] = useState(0); 

    //initialisation with API GET requests
    useEffect( () => {
       getProfileToChoose(setProfile);
       getMatches(setMatches)
    }, [])

    //Re-send match list to matches screen if new match is made
    useEffect ( ()=> {
        getMatches(setMatches);
    }, [matchNumber])

    //function to process match
    let processMatch = (id, choice) => {
        setTimeout(()=>{}, 3000)
        choosePerson(id,choice,matchNumber, setMatchNumber);
        getProfileToChoose(setProfile);
    }

    //function to reset profile
    let clearEverything = () => {
       if(window.confirm("Você vai resetar o seu perfil completamente! \n \n Tem certeza que deseja resetar?"))
       {
         clearMatches(setMatches); 
         setMatchNumber(0);
       }
    }

    //function to change page
    let changePage = () => {
        if(currentPage === "HomeScreen") 
        {
            setCurrentPage("MatchesScreen");
        }
        else {
            setCurrentPage("HomeScreen")
        }
    }

    //function to decide what page will be rendered
    let renderedPage; 
    switch (currentPage) {
        case "HomeScreen" : 
        {
            renderedPage = <HomeScreen profile= {profile}
                                       denyMatch= {() =>processMatch(profile.id, false)}
                                       acceptMatch = {() => processMatch(profile.id,true)}
                                       denyStatus = {false}
                                       acceptStatus = {false}
                            />
            break; 
        }

        case "MatchesScreen":  
        {
            renderedPage = <MatchesScreen matches = {matches}/> 
            break; 
        }

        default: 
        renderedPage = <HomeScreen/> 
    }

  return (
    <ScreenContainer>
        <Header page= {currentPage} changePage = {changePage}/>
        {renderedPage}
    <Button colorScheme='red' leftIcon={<DeleteIcon />} onClick={() => clearEverything()}>Deletar Perfil</Button>
    </ScreenContainer>
  )
}
