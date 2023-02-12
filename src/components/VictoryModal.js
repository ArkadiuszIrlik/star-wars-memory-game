import './../styles/VictoryModal.css';

export default function VictoryModal({ onCloseModal }) {
  return (
    <div className='modal-container'>
      <div className='inset-border'></div>
      <h2 className='congratulations'>Congratulations, you win!</h2>
      <button type='button' onClick={onCloseModal}>New Game</button>
    </div>
  )
}