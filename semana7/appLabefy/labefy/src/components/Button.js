import React from 'react'
import './Button.css'


export default class Button extends React.Component {

    render() {


        return(
            // <div>
                <button onClick={this.props.funcao}>{this.props.texto}</button>
            // </div>
        )
            

    }
}