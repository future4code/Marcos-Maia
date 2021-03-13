import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
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
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/48/48'}
          fotoPost={'https://picsum.photos/198/248'}
        />

      </div>
    );
  }
}

export default App;
