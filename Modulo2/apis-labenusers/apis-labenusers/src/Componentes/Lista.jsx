import React from "react";
import styled from "styled-components";
import axios from "axios";
import DetalheUsuario from "./DetalheUsuario";


let ListaContainer = styled.div`
display: flex; 
flex-direction: column; 
align-items: center; 
width: 100%; 
height: 100%; 

`

let Busca = styled.div`
    display: flex; 

    button {
        width: 5vw; 
    }

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
        telaDetalheUsuario: false,   
        detalheUsuarioId: "",  
        searchBar: "",
        filtrarUsuario: false,
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

        this.setState({detalheUsuarioId: "", telaDetalheUsuario: false})
    }

    //API Get all Users
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

    voltarLista = () =>
    {
        this.mostrarUsuarios(); 
        this.setState({telaDetalheUsuario: false, detalheUsuarioId: ""})
    }

    irParaDetalheUsuario = (id) => {
     this.setState({telaDetalheUsuario: true, detalheUsuarioId: id})
    }

    


    render() {

        //variavel de pagina renderizada
       
        let renderedPage
        //se nao tiver que mostrar tela detalhada, mostra lista normal
        if(this.state.telaDetalheUsuario === false) {
            let optionalRenderedPage = this.state.usuarios.map( (user) => {
            return ( <UserListItem onClick={() => this.irParaDetalheUsuario(user.id)} > 
                    <li key={user.id} >{user.name}</li> 
                    <button onClick={() => this.deletarUsuario(user.id)}>Deletar</button>
                    </UserListItem>
            )});

              
                if(this.state.searchBar !== "" )
                {
                  
                  let filteredpage = this.state.usuarios.filter( (user) => {
                        
                        return user.name.toLowerCase().includes(this.state.searchBar.toLowerCase()) })
                    .map( (user) => {
                       
                        return ( <UserListItem onClick={() => this.irParaDetalheUsuario(user.id)} > 
                                <li key={user.id} >{user.name}</li> 
                                <button onClick={() => this.deletarUsuario(user.id)}>Deletar</button>
                                </UserListItem>
                        )});
                        renderedPage = [...filteredpage]        
                }

                
            else {
                renderedPage = [...optionalRenderedPage];
            }
        } 

         else
        {
            renderedPage = <DetalheUsuario 
                            voltarPagina = {this.voltarLista} 
                            deletarUsuario = { (id) => {this.deletarUsuario(id)}}
                            id = {this.state.detalheUsuarioId}/>
        }

        let busca = <Busca> <input placeholder="Pesquisar usuarios" onChange={(event) => this.setState({searchBar: event.target.value})} value={this.state.searchBar}/> 
                             </Busca>

    

        return(
            <ListaContainer>
                <h2>{this.state.telaDetalheUsuario ? "Detalhes do Usuario": "Lista de Usuarios"}</h2>
                {this.state.telaDetalheUsuario ? <span></span> : busca}
                <div>
               <ul>{renderedPage}</ul>
                </div>
                
            </ListaContainer>
        )
    }
}