import './App.css';
import CardGrid from './components/CardGrid';
import ScoreDisplay from './components/ScoreDisplay';

function App() {
  return (
    <div className='ultrawide-container'>
      <div className='header'>
        <div className='game-title'>
          <h2 className='main-title'>Star Wars</h2>
          <h3 className='sub-title'>A Memory Game</h3>
        </div>
        <ScoreDisplay />
      </div>
      <div className='main'>
        <CardGrid />
      </div>
    </div>
  );
}

export default App;
