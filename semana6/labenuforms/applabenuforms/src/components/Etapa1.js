import React from "react";


class Etapa1 extends React.Component {
  render() {
    return (
      <div className="etapa">
        <p>Etapa 1 - DADOS GERAIS</p>

        <p>Qual o seu nome?</p>
        <input
        // className='a'
        // value={this.state.valorInputNome}
        // onChange={this.onChangeInputNome}
        // placeholder={'Nome'}
        />
        <p>Qual sua idade?</p>
        <input
        // className="b"
        // value={this.state.valorInputTexto}
        // onChange={this.onChangeInputTexto}
        // placeholder={'Mensagem'}
        // onKeyDown={this.onKeyDown}
        />
        <p>Qual seu email?</p>
        <input
        // className='a'
        // value={this.state.valorInputNome}
        // onChange={this.onChangeInputNome}
        // placeholder={'Nome'}
        />
        <p> Qual a sua escolaridade?</p>
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
