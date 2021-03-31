import React from 'react'
import axios from 'axios'
import Button from '../components/Button'

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

    onClickDelete = (playlist) => {
        console.log(playlist.id)
        axios
        .delete(
            // 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId',
            `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlist.id}`,
            {
                headers: {
                    Authorization: 'marcos-maia'
                }
            }
        )
        .then((res) => {
            alert('Playlist deletada com sucesso')
            this.getApiData()
            console.log(res)
        })
        .catch((err) => {
            alert('Falhou')
            console.log(err)
        })
    }

    render(){

        //funções de filtragem para enviar ao JSX (tal como o map)
        const playlistsToScreen = this.state.playlists.map((playlist) => (
            <div className='list-item' key={playlist.id}>{playlist.name}
            <Button
                texto='DELETAR'
                funcao={() => this.onClickDelete(playlist)}
            />
            </div>
        )) 

        return(

            <div className='screen-listar'>
            <h2>Esta é sua lista de playlists atualizada:</h2>
            {
                this.state.playlists.length > 0 ? (
                    <div className='list'>{playlistsToScreen}</div>
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