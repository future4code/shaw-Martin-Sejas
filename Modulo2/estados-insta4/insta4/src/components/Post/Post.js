import React from 'react'
import styled from 'styled-components'

//imports of images
import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import IconeSalvar from '../iconeSalvar/IconeSalvar'
import emptyBookmark from '../../img/empty_bookmark.png'
import ShareButton from '../../img/share_button.png'
import IconeCompartilhar from '../IconeCompartilhar/IconeCompartilhar'
// import IconeCompartilharAgora from '../iconeCompartilhar/IconeCompartilhar'

//main post cointainer
const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

// post header div
const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  width: 100%;
  

  div {
    
    padding-left: 45%;
  }
`
//footer div
const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`
//photo container for user profile
const UserPhoto = styled.img`
  max-height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`
//main post picture
const PostPhoto = styled.img`
  width: 100%;
`

//main post picture
const SharePhoto = styled.img`
  width: 30px;
`




class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 5,
    comentando: false,
    numeroComentarios: 5,
    shared: false,
    
  }

  

  // 3 event functions
  onClickCurtida = () => {
    console.log('Curtiu!')

    //3) b.
    {
      let curtidoNovo = this.state.curtido ? (this.state.numeroCurtidas-1) : (this.state.numeroCurtidas+1); 

      this.setState({curtido: !this.state.curtido,
                      numeroCurtidas: curtidoNovo,
      });
      
    
    }
    
  }

  onClickComentario = () => { 
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1,
      
      
      
    })
  }

  onClickShare = () => 
  {
    this.setState(
      {
        shared: !this.state.shared,
      })
    
  }

  render() {

    let iconeCompartilhar;
    
    if (this.state.shared)
    {
      iconeCompartilhar = <IconeCompartilhar></IconeCompartilhar>;
    }


    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto;
    
    } else {
      iconeCurtida = iconeCoracaoBranco;
      
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
      
    }



    

    return <PostContainer> {/* main post cointainer */}
      <PostHeader>  {/* header container */}
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem de Usuario'}/>
        <p>{this.props.nomeUsuario}</p>
        <div> 
           <IconeSalvar 
           pictureUrl= {emptyBookmark}
            /> 
         </div>
      </PostHeader>
       
      <PostPhoto src={this.props.fotoPost} alt={'Imagem de Post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />

      <SharePhoto src = {ShareButton} 
        onClick = {this.onClickShare}
      />
      </PostFooter>
      {componenteComentario}
      {iconeCompartilhar}
    </PostContainer>
  }
}

export default Post