import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  button {
  
    margin-bottom: 3%; 
    width: 8vw;
    height: 15%; 
    align-self: center;
  }
`

const FormContainer = styled.div`
  display: flex;
  flex-direction: row; 
  
  padding: 0.5%; 

  div {
    display: flex;
    flex-direction: column;
    height: 15%; 
    width: 20vw;
    
  }

  label 
  {
    text-align: center; 
  }

`

class App extends React.Component {


  state = {
    posts: [
      {
        id: 0,
        nomeUsuario: "paulinha", 
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/210/150",
      },

      {
        id: 1,
        nomeUsuario: "Gabriel", 
        fotoUsuario: "https://picsum.photos/30/50",
        fotoPost: "https://picsum.photos/200/150",
      },

      {
        id: 2,
        nomeUsuario: "Martin", 
        fotoUsuario: "https://picsum.photos/20/50",
        fotoPost: "https://picsum.photos/190/150",
      },

    ],

    dadoUsuario: "", 
    urlFotoUsuario: "", 
    urlFotoPost: "", 
  }

  render() {

    // arrow function botando em lista posts
    let pagePosts = this.state.posts.map( (post) => {
      return(

        <li key={post.id}>
        <Post
            nomeUsuario={post.nomeUsuario}
            fotoUsuario={post.fotoUsuario}
            fotoPost={post.fotoPost}   
            />    
            </li>  
      )
    })

    //input usuario
    let dadosUsuario = (event) => {

      this.setState({dadoUsuario: event.target.value});
    }

    //input urlFotoUsuario
    let dadosFotoUsuario = (event) => {

      this.setState({urlFotoUsuario: event.target.value});

    }

    //input urlFotoPost
    let dadosFotoPost = (event) => {

      this.setState({urlFotoPost: event.target.value});

    }


    let adicionarPost = () => {
      //setting consistent id
      let newId = this.state.posts[this.state.posts.length -1].id + 1; 
      

      let Post = {
        id: newId,
        nomeUsuario: this.state.dadoUsuario,
        fotoUsuario: this.state.urlFotoUsuario,
        fotoPost: this.state.urlFotoPost,
      }

      let newPosts = [...this.state.posts]; 

      newPosts.push(Post); 

      this.setState({posts: newPosts, dadoUsuario: "", urlFotoUsuario: "", urlFotoPost: ""})

    }




    return (
     
      <MainContainer>
         <FormContainer>
          <div> 
             <label>Nome de Usuario:</label><input onChange={dadosUsuario} value= {this.state.dadoUsuario}/> 
           </div>
           <div> 
             <label>URL Foto de Usuario:</label><input onChange={dadosFotoUsuario} value= {this.state.urlFotoUsuario}/> 
           </div>
           <div> 
             <label>URL Foto de Post:</label><input  onChange={dadosFotoPost} value= {this.state.urlFotoPost}/> 
           </div>
        </FormContainer>
        <button onClick={adicionarPost}>Adicionar Post</button>
        <ul>{pagePosts}</ul>
      </MainContainer>    
    );
  }
}

export default App;
