import React from 'react'
import './Card.css'

class Card extends React.Component {

  render() {

    return <div className='card-container'>
              <div className='card-foto'>
                  <img className='foto' src={this.props.cardFoto} alt='Imagem do Card'/>
              </div>
              <div className='card-texto'>
                <div className='card-dados'>
                  {/* {this.props.id} */}
                  <p>{this.props.cardNome}</p>
                  {/* <p>{this.props.cardPreco}</p> */}
                </div>
                
                <div className='card-botao'>
                    <button onClick={this.props.funcao}> {this.props.textoBotao} </button>
                </div>

              </div>
            </div>
  }

}

export default Card 