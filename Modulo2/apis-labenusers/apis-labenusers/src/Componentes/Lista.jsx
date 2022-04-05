import React from "react";
import styled from "styled-components";
import axios from "axios";

let ListaContainer = styled.div`
display: flex; 
flex-direction: column; 
align-items: center; 
width: 100%; 
height: 100%; 

`

let UserListItem = styled.div`
display: flex; 
flex-direction: row; 
justify-content: space-between;
width: 20vw;

button {
    width: 50%;
}

li {
    font-size: 1.3rem;
}
`
let header =  {
    headers: {
   Authorization: 'martin-sejas-shaw'
   }};

  
    
  


export default class Lista extends React.Component{

    state = {
        usuarios: [],       
    }

    deletarUsuario = (id) => {

        if(window.confirm("Tem certeza que quer deletar?")) {
            let url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/";
           
            axios.delete(`${url}${id}`, header).then( (response) => {
                alert("Usuario deletado com sucesso!");
                this.mostrarUsuarios()
            }).catch( (error) => {
                alert(`Erro: ${error.response.data}`)
            })
        }
    }

    mostrarUsuarios() {
        let url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
        
        axios.get(url,header).then( (response) => { 
            this.setState({usuarios: response.data})
            
        }).catch( (error) => {
            alert(`Erro: ${error.response.data}`)
        })
    }


    componentDidMount()
    {
       this.mostrarUsuarios()
    }


    render() {

        let showUsers = this.state.usuarios.map( (user) => {
        return ( <UserListItem> 
                <li key={user.id}>{user.name}</li> 
                <button onClick={() => this.deletarUsuario(user.id)}>Deletar Usuario</button>
                </UserListItem>
        )}); 


        return(
            <ListaContainer>
                <h2>Lista de Usuarios</h2>
                <div>
               <ul>{showUsers}</ul>
                </div>
                
            </ListaContainer>
        )
    }
}