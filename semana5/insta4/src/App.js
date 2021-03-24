import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import styled from 'styled-components'

// const Button = styled`
//   margin: 1px
// `

const FormStyle = styled.div`
input{
  margin: 5px 3px;
}
`

class App extends React.Component {

  state = {
    posts:[
      {
        nomeUsuario:'Paulinha',
        fotoUsuario:'https://picsum.photos/50/50',
        fotoPost:'https://picsum.photos/200/150'
      },
      {
        nomeUsuario:'Marcos',
        fotoUsuario:'https://picsum.photos/49/49',
        fotoPost:'https://picsum.photos/199/249'
      },
      {
        nomeUsuario:'Jose',
        fotoUsuario:'https://picsum.photos/48/48',
        fotoPost:'https://picsum.photos/198/248'
      }
    ],
    valorInputNomeUsuario: '',
    valorInputFotoUsuario: '',
    valorInputFotoPost:''
  }

  adicionarPost = () =>{
    const novoPost = {
      nomeUsuario: this.state.valorInputNomeUsuario,
      fotoUsuario: this.state.valorInputfotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    }
    const novoPosts = [...this.state.posts, novoPost]

    this.setState({ posts: novoPosts })
  }


  onChangeInputNomeUsuario = (event) =>{
    this.setState({ valorInputNomeUsuario: event.target.value})
  }
  onChangeInputfotoUsuario = (event) =>{
    this.setState({ valorInputfotoUsuario: event.target.value})
  }
  onChangeInputFotoPost = (event) =>{
    this.setState({ valorInputFotoPost: event.target.value})
  }

  render() {
      return(
        <div className={'app-container'}> 
        {/* <Estilos> */}
          <FormStyle>
            <input
              value={this.state.valorInputNomeUsuario}
              onChange={this.onChangeInputNomeUsuario}
              placeholder={'Nome User'}
            /> 
            {/* </FormStyle> */}
            <input 
              value={this.state.valorInputfotoUsuario}
              onChange={this.onChangeInputfotoUsuario}
              placeholder={'Imagem do Usuário'}
            />
            <input 
              value={this.state.valorInputFotoPost}
              onChange={this.onChangeInputFotoPost}
              placeholder={'Foto do Post'}
            />
            <button onClick={this.adicionarPost}>Postar</button>
            </FormStyle>

          {this.state.posts.map((post) => {
              return <Post 
                key={post.nomeUsuario}
                nomeUsuario={post.nomeUsuario}
                fotoUsuario={post.fotoUsuario}
                fotoPost={post.fotoPost.toString()}
              />
          })}
          {/* </Estilos> */}
      </div>
      ) 
  }
}

export default App;
