import React from "react";

class Etapa1 extends React.Component {
  render() {
    return (
      <div className="App">
        Etapa 1 - DADOS GERAIS
        Qual o seu nome?
        <input
        // className='a'
        // value={this.state.valorInputNome}
        // onChange={this.onChangeInputNome}
        // placeholder={'Nome'}
        />
        Qual sua idade?
        <input
        // className="b"
        // value={this.state.valorInputTexto}
        // onChange={this.onChangeInputTexto}
        // placeholder={'Mensagem'}
        // onKeyDown={this.onKeyDown}
        />
        Qual seu email?
        <input
        // className='a'
        // value={this.state.valorInputNome}
        // onChange={this.onChangeInputNome}
        // placeholder={'Nome'}
        />
        Qual a sua escolaridade?
        <select>
          <option>Ensino fundamental completo</option>
          <option>Ensino médio completo</option>
          <option>Ensino superior completo</option>
        </select>
      </div>
    );
  }
}

export default Etapa1;
