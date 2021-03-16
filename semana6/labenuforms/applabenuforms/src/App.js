import React from "react";
import "./App.css";
// import Estilo from './components/Estilo'
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Final from "./components/Final";

//   Tela1 = styled.div`
//   background-color: beige;
// `

class App extends React.Component {
  state ={
    etapa : 1,
    // valorInputNome: '',
    // valorInputTexto: ''
  }

  render() {
    return (
      <div className="App">
        Tela App
        <br />
        <button>Próxima Etapa</button>
      </div>
    );
  }
}

export default App;
