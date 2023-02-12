import './App.css';
import CardGrid from './components/CardGrid';
import ScoreDisplay from './components/ScoreDisplay';
import { useState } from 'react';

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  function handleScoreIncrease() {
    setCurrentScore(currentScore + 1);
  }

  function handleWrongGuess() {
    setCurrentScore(0);
  }

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
        <CardGrid onScoreIncrease={handleScoreIncrease} 
          onWrongGuess={handleWrongGuess}
        />
      </div>
    </div>
  );
}

export default App;
