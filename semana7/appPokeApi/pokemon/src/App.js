import React from 'react'
import './App.css';
import Card from './components/Card'
import axios from 'axios'
import CardMini from './components/CardMini'

export default class App extends React.Component {
  state = {
    pokes : [],
    spriteSelected : 'https://i.pinimg.com/originals/46/8f/78/468f7826c935091acfb33c303733a0e5.png',
    pokeName: 'Escolha o seu',
    escolhido: false,
    pokesTeam: []
  }

  componentDidMount () {
    this.getPokemonApi()
  }

  getPokemonApi = async () => {
    const response = await axios.get(
      'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0'
      )
    this.setState({ pokes : response.data.results })
    // console.log(response.data.results)
  }

  getSprite = async (e) => {
    // console.log(e.target.value)
    if( e.target.value !== 'pokebola') {
      
      try {
        const idLink = e.target.value 
        const response = await axios.get( `${idLink}` )
        // console.log(response.data)
        this.setState({ 
          spriteSelected : response.data.sprites.front_default,
          pokeName : response.data.name
        })
      } catch(error) {
        console.log(error)
      }

    } else {
      this.setState({ spriteSelected : 'https://i.pinimg.com/originals/46/8f/78/468f7826c935091acfb33c303733a0e5.png'})

    }
  }

  onClickAddEquipe = (pokeName) => {
    const newsPokes = this.state.pokes.map( (poke) => {
      if(pokeName === poke.pokeName) {
        const newPoke ={
          ...poke,
          escolhido: true,
        }
        return newPoke
      } else {
        return poke
      }
    })
    this.setState({ pokesTeam : newsPokes})
    console.log(` o click mudou  ${this.state.pokesTeam}`)
  }

  render () {
    const pokeslist = this.state.pokes.map( (poke) => {
      return <option key={ poke.name} value={poke.url}> {poke.name} </option>
    })

    return (
      <div className="app-container">
        <div className='app-area-esquerda'>
        </div>

        <div className='app-area-central'>
          <h2>Pegue seu Pokemon</h2>

          <select
            // value={this.state.valueSelected}
            onChange={this.getSprite}
          >
            <option value='pokebola'>Selecione seu pokemon</option>
           {pokeslist}
          </select>
            <Card
              cardNome={this.state.pokeName}
              textoBotao='Capturar'
              cardFoto={this.state.spriteSelected}
              funcao={ () => this.onClickAddEquipe(this.state.pokeName)}
              
            />
            Ps. Os pokemon ainda não podem ser capturados. Ordens do Prof. Carvalho

        </div>  
        <div className='app-area-direita'>
          <CardMini
                cardNome='???'
                textoBotao='Soltar'
                cardFoto='https://i.pinimg.com/originals/46/8f/78/468f7826c935091acfb33c303733a0e5.png'
                  // cardFoto={ (poke) => {
                  //   let sprite = this.state.spriteSelected
                  // }
                  //   this.state.spriteSelected
                  // }

              />
                    <CardMini
                cardNome='???'
                textoBotao='Soltar'
                cardFoto='https://i.pinimg.com/originals/46/8f/78/468f7826c935091acfb33c303733a0e5.png'
                  // cardFoto={ (poke) => {
                  //   let sprite = this.state.spriteSelected
                  // }
                  //   this.state.spriteSelected
                  // }

              />
          <CardMini
                cardNome='???'
                textoBotao='Soltar'
                cardFoto='https://i.pinimg.com/originals/46/8f/78/468f7826c935091acfb33c303733a0e5.png'
                  // cardFoto={ (poke) => {
                  //   let sprite = this.state.spriteSelected
                  // }
                  //   this.state.spriteSelected
                  // }

              />
          <CardMini
                cardNome='???'
                textoBotao='Soltar'
                cardFoto='https://i.pinimg.com/originals/46/8f/78/468f7826c935091acfb33c303733a0e5.png'
                  // cardFoto={ (poke) => {
                  //   let sprite = this.state.spriteSelected
                  // }
                  //   this.state.spriteSelected
                  // }

              />
          <CardMini
                cardNome='???'
                textoBotao='Soltar'
                cardFoto='https://i.pinimg.com/originals/46/8f/78/468f7826c935091acfb33c303733a0e5.png'
                  // cardFoto={ (poke) => {
                  //   let sprite = this.state.spriteSelected
                  // }
                  //   this.state.spriteSelected
                  // }

              />
          <CardMini
                cardNome='???'
                textoBotao='Soltar'
                cardFoto='https://i.pinimg.com/originals/46/8f/78/468f7826c935091acfb33c303733a0e5.png'
                  // cardFoto={ (poke) => {
                  //   let sprite = this.state.spriteSelected
                  // }
                  //   this.state.spriteSelected
                  // }

              />


        </div>

      </div>
    );

  }
}

// export default App;
