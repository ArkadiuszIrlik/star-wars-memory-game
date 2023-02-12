import './../styles/Card.css';

export default function Card({ cardData, onSelectCard }) {
  return (
    <div className='card-container' onClick={()=> onSelectCard(cardData.id)}>
      <div className='card-layout'>
        <div className='card-top'></div>
        <div className='image' style={{backgroundImage: `url(${cardData.charImg})`}}></div>

        {/* <div className='card-middle'>
          <div className='card-image-container'>
            <img src={cardData.charImg} className='card-image' draggable='false' />
            <div className='image' style={{backgroundImage: `url(${cardData.charImg})`, backgroundColor: 'green'}}></div>
          </div>
        </div> */}
        <div className='card-bottom'>
          <h2 className='card-description'>{cardData.charName}</h2>
        </div>
      </div>
    </div>
  )
}