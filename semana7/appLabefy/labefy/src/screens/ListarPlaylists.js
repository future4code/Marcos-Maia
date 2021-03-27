import React from 'react'
import axios from 'axios'

export default class ListarPlaylists extends React.Component {

    state ={
        playlists: []
    }

    //se tivesse inputs, funções de controle viriam aqui

    componentDidMount() {
        this.getApiData()
    }

    getApiData = () => {
        axios
        .get(
            'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists',
            {
                headers: {
                    Authorization: 'marcos-maia'
                }
            }
        )
        .then((res) => {
            this.setState({ playlists : res.data.result.list})
            console.log(res.data.result.list);

        })
        .catch((err) => {
            console.log(err.response.data)
        })

    }

    render(){

        //funções de filtragem para enviar ao JSX (tal como o map)
        const playlistsToScreen = this.state.playlists.map((playlist) => (
            <li key={playlist.id}>{playlist.name}</li>
        )) 

        return(

            <div className='screen-listar'>
            <h2>Esta é sua lista de playlists atualizada:</h2>
            {
                this.state.playlists.length > 0 ? (
                    <ul>{playlistsToScreen}</ul>
                ) : (
                    <div>
                        <p>carregando playlists... </p>
                        <p>Verifique se existem playlists incluídas.</p>
                    </div>
                )
            }
            </div>
        )
    }
}