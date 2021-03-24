import React from 'react';

class Etapa3 extends React.Component {

  render() {
    return (
      <div className="etapa">
        Etapa3 - INFORMAÇÕES GERAIS DE ENSINO
        Por que você não terminou um curso de ?
        <input
        // className='a'
        // value={this.state.valorInputNome}
        // onChange={this.onChangeInputNome}
        // placeholder={'Nome'}
        />
        Você fez algum curso complementar?
        <input
        // className="b"
        // value={this.state.valorInputTexto}
        // onChange={this.onChangeInputTexto}
        // placeholder={'Mensagem'}
        // onKeyDown={this.onKeyDown}
        />
      </div>
    );
  }
}

export default Etapa3;


