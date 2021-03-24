import React from "react";
import "./App.css";
// import Estilo from './components/Estilo'
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Final from "./components/Final";

import styled from 'styled-components'

  const AppEstilo = styled.div`

  body {
    background-color: bisque;
  }

  div {
    background-color: bisque;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center
  }
  .etapa {
    /* height: 100vh; */
    display: flex;
    align-self: center;
    justify-self: center;
    background-color: white;
    padding: 40px;
  }
  input {
    display: block;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    align-self: center;
    justify-self: center;
    /* flex-direction: column; */
    /* justify-content: center; */
    /* justify-items: center; */
  }
  select {
    max-width: 150px;
    display: block;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  button {
    width: 120px;
    display: block;
    margin: 0 auto;

  }
  p {
    margin-bottom: 0px; 
    margin-top: 10px;
  }
`


class App extends React.Component {
  state ={
    etapa : 1,
    // valorInputNome: '',
    // valorInputTexto: ''
  }

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />
      case 2:
        return <Etapa2 />
      case 3: 
        return <Etapa3 />
      case 4:
        return <Final />
      default:
        return <></>
    }
  }

  irParaProximaEtapa = () => {

    const novaEtapa = this.state.etapa + 1

    this.setState({ etapa: novaEtapa })
    
  }
  


  render() {
    return (
      <AppEstilo>
        <div className="App">
          Tela App
          <br />
          {this.renderizaEtapa()}
          {this.state.etapa < 4 ? (
            <button button onClick={this.irParaProximaEtapa}>Próxima Etapa</button>
          ) : (
            <p></p>
            ) }
          {/* <button onClick={this.irParaProximaEtapa}>Próxima Etapa</button> */}
        </div>
      </AppEstilo>  
    );
  }
}

export default App;
