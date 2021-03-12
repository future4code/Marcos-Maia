import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="smallcard-container">
            <img src={ props.imagem } />
            <div>
                <p><b>{ props.nome }</b>: <a href={ props.link }>{ props.descricao }</a></p>
            </div>
        </div>
    )
}

export default CardPequeno;