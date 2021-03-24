import React from 'react';
import './App.css';
import Post from './components/Post/Post';


//Observação: DESCULPE O MONTE DE COMENTÁRIOS. MAS PASSEI POR PARTES MAIS COMPLEXAS. 
//OS COMENTÁRIOS SÃO PARA SERVIR DE GUIA ENQUANTO INTERNALIZO AS SINTAXES
//

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
    ]
  }
  //!!!!!! CONFORME EXEMPLO 5 DO ARQUIVO DE EXEMPLOS:   (SÓ A PARTE DO STATE)
  // https://codesandbox.io/s/exemplos-listas-estado-mgr6k?file=/src/components/Exemplo5.js

  // nomeUsuario: this.nomeUsuario,
  // fotoUsuario: this.fotoUsuario,
  // fotoPost: this.fotoUsuario

  

  render() {

    //COMO ESTAVA
    // let posts = [
    //   {
    //     nomeUsuario:'paulinha',
    //     fotoUsuario:'https://picsum.photos/50/50',
    //     fotoPost:'https://picsum.photos/200/150'
    //   },
    //   {
    //     nomeUsuario:'Marcos',
    //     fotoUsuario:'https://picsum.photos/49/49',
    //     fotoPost:'https://picsum.photos/199/249'
    //   },
    //   {
    //     nomeUsuario:'Jose',
    //     fotoUsuario:'https://picsum.photos/48/48',
    //     fotoPost:'https://picsum.photos/198/248'
    //   }
    // ]
  
    //ANTES DO  STATE
    // const listaDePosts = posts.map((post) => {
    //   return <Post 
    //     key={post.nomeUsuario}
    //     nomeUsuario={post.nomeUsuario}
    //     fotoUsuario={post.fotoUsuario}
    //     fotoPost={post.fotoPost}
    //   />
    // })


    

      return(
        <div className={'app-container'}>
          <button onChange="adicionarPost" style={{width: '20%', height: '20px'}}></button>
          {/* //ANTES DO STATE */}
          {/* {listaDePosts} */}
          
          {/* //APÓS STATE */}
        {this.state.posts.map((post) => {
            return <Post 
              key={post.nomeUsuario}
              nomeUsuario={post.nomeUsuario}
              fotoUsuario={post.fotoUsuario}
              fotoPost={post.fotoPost}
            />
         })}

{/* //COMO ESTAVA */}
        {/* <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
                <Post
          nomeUsuario={'Marcos'}
          fotoUsuario={'https://picsum.photos/49/49'}
          fotoPost={'https://picsum.photos/199/249'}
        />
        <Post
          nomeUsuario={'Jose'}
          fotoUsuario={'https://picsum.photos/48/48'}
          fotoPost={'https://picsum.photos/198/248'}
        /> */}

      </div>
      ) 
  }
}

export default App;
