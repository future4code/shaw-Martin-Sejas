import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul` //unordered list
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li` //list item
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`//container de inputs
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [ ],
      inputValue: '',
      filtro: '',
      filtroEscrito: "",
    }

  componentDidUpdate(prevProps, prevState) {
    //push tarefas pro storage

    if (prevState.tarefas !== this.state.searchInput)
    {
      localStorage.setItem("tarefas", JSON.stringify(this.state.tarefas));
    }


  };

  componentDidMount() {
      //mostrar as tarefas
      const tarefasGuardadas = localStorage.getItem("tarefas"); 
      this.setState({tarefas: JSON.parse(tarefasGuardadas)});
  };

  onChangeInput = (event) => {

    this.setState({inputValue: event.target.value});

  }

  Crescente = () => {
    let tarefasCrescentes = [...this.state.tarefas]; 

    tarefasCrescentes.sort( function(a,b) {
      return a.texto.localeCompare(b.texto)
    })

    this.setState({tarefas: tarefasCrescentes}); 
  }

  Decrescente = () => {
    let tarefasCrescentes = [...this.state.tarefas]; 

    tarefasCrescentes.sort( function(a,b) {
      return (b.texto.localeCompare(a.texto))
    })

    this.setState({tarefas: tarefasCrescentes}); 
  }

  criaTarefa = () => {
    const novaTarefa = 
    {
      id: Date.now(), 
      texto: this.state.inputValue, 
      completa: false,
    }
    const novaTarefas = [...this.state.tarefas,novaTarefa]; 

    this.setState({tarefas: novaTarefas, inputValue: "",}); 

  }

  deletarTudo = () => {
    console.log("Cheguei Aqui")
    if(window.confirm("Tem certeza que quer deletar todas as tarefas? É irreversivel"))
    {
       const NenhumaTarefa = []; 
       this.setState({tarefas: NenhumaTarefa})
    }
  }

  //DELETAR TAREFA NO DOUBLE CLICK
  deletarTarefa = (id) => {
    if(window.confirm("Deseja deletar esta tarefa?"))
    {
      let tarefasVelhas = [...this.state.tarefas]; 

      let tarefasNovas = tarefasVelhas.filter( (tarefa) => {
        return tarefa.id !== id; 
      })

      this.setState({tarefas: tarefasNovas}); 
    }
  }

  editarTarefa = (id) => {

    // if(window.confirm("Deseja editar essa tarefa?"))
    // {
    //   let tarefasVelhas = [...this.state.tarefas]; 

    //   let newTarefa = prompt("Por favor re-escreva o nome da tarefa"); 

    //   let tarefaEditada = tarefasVelhas.map( (tarefa) => {
    //     if(tarefa.id === id)
    //     {
    //       let tarefaUnica = [...tarefa];
    //       tarefaUnica.texto = newTarefa; 
    //       tarefa = tarefaUnica; 
    //     }
    //   })

    //   this.setState({tarefas: tarefaEditada})
    // }

  }

  selectTarefa = (id) => {
    const minhasTarefas = [...this.state.tarefas]; 

    let mudarTarefa = minhasTarefas.map( (tarefa) => 
    {
      if( tarefa.id === id)
      {
        tarefa.completa = !tarefa.completa;
      }
      return tarefa;
    })

    this.setState({tarefas: mudarTarefa}); 
  }

  onChangeFilter = (event) => {

    this.setState({filtro: event.target.value}); 
  }

  render() {
    let listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    let customTasks; 
    if(this.state.filtroEscrito) 
    {
      const listaNomeada = [...listaFiltrada]; 

      customTasks = listaNomeada.filter( (task) => {
        return(task.texto.includes(this.state.filtroEscrito));
      })
    }

    if(customTasks) listaFiltrada = customTasks;

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
          
        </InputsContainer>
        
        <br/>

        <InputsContainer>
        
          <label>Filtro: </label>
          <input placeholder= "Filtrar Tarefas "value={this.state.filtroEscrito} onChange = {(event) => this.setState({filtroEscrito: event.target.value})}/> 
          <select value={this.state.filtro} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
                onDoubleClick = {() => this.deletarTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
        <button onClick={this.deletarTudo}>Deletar Todas as Tarefas</button>
        <br/>
        <button onClick={this.Crescente}>Filtrar Alfabetica Crescente</button>
        <br/>
        <button onClick={this.Decrescente}>Filtrar Alfabetica Descrescente</button>
      </div>
    )
  }
}

export default App
