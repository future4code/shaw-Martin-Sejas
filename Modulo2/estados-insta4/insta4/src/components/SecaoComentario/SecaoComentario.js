import React, {Component} from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
	flex-direction: column; 
    padding: 5px;
`

const CommentsContainer = styled.div`

display: flex; 
flex-direction: column;

`

const MyComment = styled.div`
width: 100%; 
max-height: 5%;
border: 1px  solid black; 


p {
	padding-left: 5%; 
}
`
const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
`

export class SecaoComentario extends Component {
	state = {
		postComentarios: [],
		comentario: "",
	}

	adicionarComentario = () => {
		let novosComentarios = [...this.state.postComentarios];

		novosComentarios.push(this.state.comentario); 

		this.setState({postComentarios: novosComentarios, comentario: ""})

	}

	onChangeComentario = (event) => {

		this.setState({comentario: event.target.value})

	}

	render() {

		let myCommentList = this.state.postComentarios.map( (com) => {
			return (
				<MyComment> 
				<p> {com} </p>
				</MyComment>
			)
		})

		

		return <CommentContainer>
			<CommentsContainer>
				<MyComment>
					{/* props here */}
				 {myCommentList} 
				</MyComment>
				
			</CommentsContainer>
			<div> 
				 <InputComentario
	 				placeholder={'Comentário'}
	 				value={this.state.comentario}
	 				onChange={this.onChangeComentario}
	 			/>
	 			<button  onClick= {this.adicionarComentario}>Enviar</button> 
			 </div>
		</CommentContainer>
	}
}
