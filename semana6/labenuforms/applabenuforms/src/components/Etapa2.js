import React from "react";

class Etapa2 extends React.Component {
  render() {
    return (
      <div className="etapa">
        Etapa 2 - INFORMAÇÕES DO ENSINO SUPERIOR
        Qual o curso?
        <input
        // className='a'
        // value={this.state.valorInputNome}
        // onChange={this.onChangeInputNome}
        // placeholder={'Nome'}
        />
        Qual a unidade de ensino?
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

export default Etapa2;
