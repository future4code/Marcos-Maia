import './App.css';
import React from 'react';
import ListarPlaylists from './screens/ListarPlaylists'
import CriarPlaylist from './screens/CriarPlaylist' 
import Button from './components/Button'

export default class App extends React.Component {

  state = {
    screen: 'Listar',
    textButon: 'CRIAR'
  }

  renderScreen = () => {
    switch (this.state.screen) {
      case 'Listar':
        return <ListarPlaylists />
      case 'Criar':
        return <CriarPlaylist />
      default:
        return <div>ERRO NA RENDERIZAÇÃO</div>
    }
  }

  // onClickChangePage =() => {
    // console.log('mudou pág')
    // if 
    // (this.state.screen === 'Listar') {
    //   this.setState({ screen: 'Criar' })
    // } else {
    //   this.setState({ screen: 'Listar' })
    // }
  // }

    // APRENDIDO: SÓ FUNCIONA SE ESTIVER NA MESMA LINHA.
  onClickChangePage =() => {
    (this.state.screen === 'Listar') ? this.setState({ screen: 'Criar', textButon: 'LISTAR' })  : this.setState({ screen: 'Listar', textButon: 'CRIAR' })
  }



  render (){



    return (
      <div className="app-container">
        <header>
          <div className='nonenone'>
              <p>ELEMENTO DA ESQUERDA  </p>
          </div>
          <div className='header-center'>
            HEADER
          </div>
          {/* <div className='header-button'> */}
          {/* <div className='button-top'> */}
            <Button 
                texto={`  ${this.state.textButon} `}
                funcao={() => this.onClickChangePage()}
                // onClick={this.}
            />
          {/* </div> */}
          {/* <div className='nonenone'>
              <p>ELEMENTO DA direita  </p>
          </div> */}


        </header>
        <div className='app-area-central'>
          {this.renderScreen()}
        </div>
        <footer>
        <div className='nonenone'>
              <p>ELEMENTO DA ESQUERDA  </p>
          </div>

            FOOTER
            <div className='nonenone'>
              <p>ELEMENTO DA direita  </p>
          </div>

        </footer>
      </div>
    );
  }
}