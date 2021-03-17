import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

let tarefaTime = setTimeout( () =>{
  return {
    id: Date.now(), // Explicação abaixo
    texto: 'tarefa timeOut',
    completa: true // Indica se a tarefa está completa (true ou false)
  }
},4000
)

class App extends React.Component {
    state = {
      // tarefas: '',
      tarefas: 
      [
        {
          id: Date.now(),
          texto: 'Texto da primeira tarefa!',
          completa: false // Indica se a tarefa está completa (true ou false)
        },
        { 
          id: Date.now(), // Explicação abaixo
          texto: 'Texto da segunda tarefa',
          completa: true // Indica se a tarefa está completa (true ou false)
        },

      ],
      inputValue: '',
      selectValue: ''
    }

    criaTarefa = () => {
      const novaTarefa = {
        id: Date.now(),    // ! método novo! 
        texto: this.state.inputValue, //! sempre receber o valor do input que foi para o estado!
        completa: false
      }
      const novasTarefas = [...this.state.tarefas, novaTarefa]
      this.setState({ tarefas: novasTarefas })
      console.log('Tarefa Criada!')
    }
  
  
  componentDidUpdate() {
    // const tarefaSalva = {}
    localStorage.setItem(`listaDeTarefas`, JSON.stringify(this.state.tarefas)) // ! Pode colocar o array inteiro com os objetos dentro
  };

  componentDidMount() {
    const listaDeTarefasString = localStorage.getItem(`listaDeTarefas`)
    const listaDeTarefasObjeto = JSON.parse(listaDeTarefasString)
    this.setState({ tarefas: listaDeTarefasObjeto })
  };
      //testar
  // apagarTarefa = () => {
  //   const novasTarefas  = this.state.tarefas.filter((tarefa) => {
  //     return tarefaID != tarefa.id
  //   })
        // this.setState({ tarefas: novoTarefas })
  // }

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value })
  }

  selectTarefa = (id) => { 
      console.log('alterada se completa', id)
      const novasTarefas = this.state.tarefas.map((tarefa) => {
        if(id === tarefa.id) {
          const novaTarefa = {
            ...tarefa,
            completa: !tarefa.completa
          }
          return novaTarefa
        } else {
          return tarefa
        }
      })

    this.setState({ tarefas : novasTarefas })
  }

  onChangeFilter = (event) => {
    this.setState({ selectValue:  event.target.value})
    
  }

  render() {
    
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.selectValue) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.selectValue} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                // key={tarefa.id}
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
