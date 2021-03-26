import React from 'react'
import './CardMini.css'


class CardMini extends React.Component {

  render() {

    return <div className='card2-container'>
              <div className='card2-foto'>
                  <img className='foto' src={this.props.cardFoto} alt={'Imagem do Card'}/>
              </div>
              <div className='card2-texto'>
                <div className='card2-dados'>
                  {/* {this.props.id} */}
                  <p>{this.props.cardNome}</p>
                  {/* <p>{this.props.cardPreco}</p> */}
                </div>
                
                <div className='card2-botao'>
                    <button onClick={this.props.funcao}> {this.props.textoBotao} </button>
                </div>

              </div>
            </div>
  }

}

export default CardMini 