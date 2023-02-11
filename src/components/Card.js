import './../styles/Card.css';

export default function Card({ charImg, charName }) {
  return (
    <div className='card-container'>
      <div className='card-layout'>
        <div className='card-top'></div>
        <div className='card-middle'>
          <div className='card-image-container'>
            <img src={charImg} className='card-image' />
          </div>
        </div>
        <div className='card-bottom'>
          <h2 className='card-description'>{charName}</h2>
        </div>
      </div>
    </div>
  )
}