import React from "react";
import styled from "styled-components";
import axios from "axios";


let CadastroContainer = styled.div`
display: flex; 
flex-direction: column; 
width: 100%; 
height: 100%; 
align-items: center; 

button {
    max-width: 15%;
}

div {
    width: 45%;  
    align-items: center; 
    justify-items: center; 
}

`

export default class Cadastro extends React.Component{

    state = {
        nome: "",
        email: "",
    }

    headers = {
        Authorization: 'martin-sejas-shaw'
    }

    criarUsuario = () => {
        let url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"; 
        let body = {
            "name": this.state.nome,
            "email": this.state.email
        }
        
        axios.post(url, body,  { headers: {
        "Authorization": 'martin-sejas-shaw'
    }}).then( (response) => {
           alert(`Usuario: ${this.state.nome}, com email: ${this.state.email} foi cadastrado com sucesso!`)
           this.setState({nome: "", email: ""})
        }).catch( (error) => { alert(`Erro: ${error.response.data}`)
            this.setState({nome: "", email: ""})})

        
    }


    render() {
        return(
            <CadastroContainer>
                <h2>Cadastro</h2>
                <div>
                <input placeholder="Nome" type="text" onChange={(event) => this.setState({nome: event.target.value})}  value= {this.state.nome}/>
                <input placeholder="E-mail" type="email" onChange={(event) => this.setState({email: event.target.value})} value= {this.state.email} />
                <button onClick={this.criarUsuario}>Criar Usuario</button>
                </div>
                <br></br>
                
            </CadastroContainer>
        )
    }
}