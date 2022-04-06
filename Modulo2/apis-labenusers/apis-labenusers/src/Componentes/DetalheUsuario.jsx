import React from "react";
import styled from "styled-components";
import axios from "axios";


const UserInfo = styled.div`
display: flex; 
flex-direction: column; 
align-items: center;

button {
    width: 15vw;
    height: 3vh; 
}
`

let header =  {
    headers: {
   Authorization: 'martin-sejas-shaw'
   }};


export default class DetalheUsuario extends React.Component{

    //will receive as props id of user, and need to send back once page is done
    //needs to show name and email

    state = {
        body: [],
        isEditing: false,
        name: "", 
        email: "",
    }




    componentDidMount() {
        this.getUserInfo(); 
    }

    getUserInfo() { 
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/";
        let id = this.props.id;
       
        axios.get(`${url}${id}`, header)
        .then( (response) => {
            this.setState({body: response.data})
        })
        .catch( (err) => {
            alert("Error ao pesquisar informações", err.response.data)
        })
    }

    editarInfo(){
        this.setState({isEditing: true})
    }

    salvarEdit(){
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/";
        let id = this.props.id;
        let body = {
            name: this.state.name ? this.state.name: this.state.body.name,
            email: this.state.email ? this.state.email: this.state.body.email
        }

        axios.put(`${url}${id}`,body,header)
        .then( (response) => { 
            alert("usuario editado com sucesso!")})
        .catch( (err) => {
            alert("Erro ao editar usuario")
        })


        this.setState({isEditing: false, name: "", email: ""})
        this.getUserInfo();
    }


    render() {

        let displayInfo; 

        if (this.state.isEditing)
        {
            displayInfo = <span>
                            <p>Nome: </p> 
                            <input placeholder="Novo Nome" onChange= {(event) => this.setState({name: event.target.value})} value = {this.state.name}/>
                            <p>Email: </p> 
                            <input placeholder="Novo Email" onChange= {(event) => this.setState({email: event.target.value})} value = {this.state.email}/>
                            <br />
                            <br></br>
                        </span>
        }
       if (!this.state.isEditing)
       {
            displayInfo =  <span>
                            <p>Nome: {this.state.body.name}</p>
                            <p>Email: {this.state.body.email} </p>
                            </span>
        }

        return(
            <UserInfo>
                <div>
                {displayInfo}
                 <button onClick={() => this.props.deletarUsuario(this.props.id)}>Deletar</button> 
                 {this.state.isEditing ? <button onClick={() => this.salvarEdit()}>Salvar</button>:<button onClick={() => this.editarInfo()}>Editar</button>}
                </div>
                <br />
                <br />
             <button onClick={this.props.voltarPagina} >Lista de Usuarios</button>
            </UserInfo>

        )
    }
}