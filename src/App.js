import './App.css';
import CardGrid from './components/CardGrid';
import ScoreDisplay from './components/ScoreDisplay';
import WelcomeModal from './components/WelcomeModal';
import ModalOverlay from './components/ModalOverlay';
import VictoryModal from './components/VictoryModal';
import { useState, useEffect } from 'react';
import userEvent from '@testing-library/user-event';

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isFirstTime, setIsFirstTime] = useState(true);
  const [isWinner, setIsWinner] = useState(false);


  function updateHighScore(currentScore) {
    if (currentScore > highScore) {
      setHighScore(currentScore);
    }
  }

  function handleScoreIncrease() {
    setCurrentScore(currentScore + 1);
  }

  function handleWrongGuess() {
    setCurrentScore(0);
  }

  useEffect(() => {
    setHighScore(0);
    setCurrentScore(0);
  }, [isWinner])

  useEffect(() => {
    updateHighScore(currentScore);
  }, [currentScore])

  return (
    <div className='ultrawide-container'>
      {isFirstTime && (<><ModalOverlay />
      <WelcomeModal onCloseModal={()=> setIsFirstTime(false)}/></>)}
      {isWinner && (<><ModalOverlay />
      <VictoryModal onCloseModal={()=> {setIsWinner(false)}}
      /></>)}
      <div className='header'>
        <div className='game-title'>
          <h2 className='main-title'>Star Wars</h2>
          <h3 className='sub-title'>A Memory Game</h3>
        </div>
        <ScoreDisplay highScore={highScore} currentScore={currentScore} />
      </div>
      <div className='main'>
        <CardGrid onScoreIncrease={handleScoreIncrease} 
          onWrongGuess={handleWrongGuess}
          onWinGame={() => setIsWinner(true)}
        />
      </div>
    </div>
  );
}

export default App;
