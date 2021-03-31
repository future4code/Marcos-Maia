import axios from 'axios'
import React from 'react'

export default class CriarPlaylist extends React.Component {

    //state
    state = {
        inputValue: ''
    }

    //funções de controle
    handleInputChange = (e) => {
        this.setState({ inputValue : e.target.value })  
    } 

    // funções de API
    onClickCreatePlaylist = (e) => {
        this.createPlaylist()

    }

    createPlaylist = () => {
        console.log('Clicou para criar playlist')
        const body = {
            name : this.state.inputValue
        }
        axios
            .post(
                'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists',
                body,
                {
                    headers: {
                        Authorization : 'marcos-maia'
                    }
                }
            )
            .then((res) => {
                this.setState({ inputValue: ''})
                alert('Playlist criada com sucesso')

            })
            .catch((err) => {
                console.log(err.response.data)
            })
    
            // this.onClickChangePage()
    }

    //funções gerais



    render(){

        //funções de filtragem para enviar ao JSX


        return(

            <div className='screen-criar'>
                <h2>Crie abaixo a sua playlist:</h2>

                <input
                    placeholder={'Nome da playlist a incluir'}
                    // value={this.state.inputValue}
                    onChange={this.handleInputChange}
                    value={this.state.inputValue}
                />
                <button onClick={this.onClickCreatePlaylist}> CRIAR </button>

            </div>
        )
    }
}