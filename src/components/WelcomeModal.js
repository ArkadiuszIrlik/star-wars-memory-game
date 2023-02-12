import './../styles/WelcomeModal.css';

export default function WelcomeModal({ onCloseModal }) {
  return (
    <div className='modal-container'>
      <div className='inset-border'></div>
      <h2 className='welcome'>Welcome to the Star Wars memory game!</h2>
      <p>You goal is to select each character exactly once.</p>
      <p>If you select the same character twice, your streak resets.</p>
      <p><strong>Good luck!</strong></p>
      <button type='button' onClick={onCloseModal}>Continue</button>
    </div>
  )
}