import './../styles/ScoreDisplay.css';

export default function ScoreDisplay({highScore, currentScore}) {
  return (
    <div className='score-container'>
      <h2 className='score-label'>High Score: {highScore}</h2>
      <h2 className='score-label'>Current Score: {currentScore}</h2>
    </div>
  )
}