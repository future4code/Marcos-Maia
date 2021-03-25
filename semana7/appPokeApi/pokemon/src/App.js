import logo from './logo.svg';
import './App.css';
import Card from './components/Card'

function App() {
  return (
    <div className="app-container">
      <div className='app-area-central'>
        <select>
          <option> Faça sua seleção </option>
          <option> Teste </option>
        </select>
          <Card
            CardFoto='https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2020/03/pikachu-2-810x540-507x338.jpg'
            id='id'
            CardNome='cardNome'
          />
      </div>  
    </div>
  );
}

export default App;
