import './../styles/CardGrid.css';
import Card from './Card';
import { useState, useEffect } from 'react';

//function for importing images in bulk and storing them as an object
function importAll(r) {
  let images = {};
   r.keys().forEach((item, index) => { images[item.replace(/^(\.\/)([\w-]+)(\.[\w]+)$/, '$2')] = r(item); });
  return images
 }

 function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function randomizeArrayOrder(array) {
  const arrayCopy = [...array];
  const nextArray = [];
  while (arrayCopy.length) {
    nextArray.push(...arrayCopy.splice(getRandomInt(0, arrayCopy.length), 1))
  }
  return nextArray;
}

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


export default function CardGrid({ onScoreIncrease, onWrongGuess }) {
  const characterImages = importAll(require.context('./../img/char/', false, /\.(png|jpe?g|svg)$/));
  const [cards, setCards] = useState([
    {id: crypto.randomUUID(), charName: 'Yoda', charImg: characterImages['yoda']},
    {id: crypto.randomUUID(), charName: 'Padmé Amidala', charImg: characterImages['padme-amidala']},
    {id: crypto.randomUUID(), charName: 'Boba Fett', charImg: characterImages['boba-fett']},
    {id: crypto.randomUUID(), charName: 'Jabba the Hutt', charImg: characterImages['jabba-the-hutt']},
    {id: crypto.randomUUID(), charName: 'Luke Skywalker', charImg: characterImages['luke-skywalker']},
    {id: crypto.randomUUID(), charName: 'Han Solo', charImg: characterImages['han-solo']},
    {id: crypto.randomUUID(), charName: 'R2D2', charImg: characterImages['r2d2']},
    {id: crypto.randomUUID(), charName: 'C3PO', charImg: characterImages['c3po']},
    {id: crypto.randomUUID(), charName: 'Darth Vader', charImg: characterImages['darth-vader']},
    {id: crypto.randomUUID(), charName: 'Princess Leia', charImg: characterImages['princess-leia']},
    {id: crypto.randomUUID(), charName: 'Obi Wan Kenobi', charImg: characterImages['obi-wan-kenobi']},
    {id: crypto.randomUUID(), charName: 'Lando Calrissian', charImg: characterImages['lando-calrissian']}
  ])
  const [currentStreakIds, setCurrentStreakIds] = useState([]);

  async function checkGuess(id, cardNode) {
    if (currentStreakIds.includes(id)) {
      cardNode.classList.add('wrong-guess', 'guess');
      await timeout(300);
      cardNode.classList.remove('wrong-guess', 'guess');
        onWrongGuess();
        setCurrentStreakIds([]);
    } else {
      cardNode.classList.add('right-guess', 'guess');
      await timeout(300);
      cardNode.classList.remove('right-guess', 'guess');
      setCurrentStreakIds([...currentStreakIds, id]);
      onScoreIncrease();
    }
  }

  return (
    <div className='grid-container'>
      {randomizeArrayOrder(cards).map(card => 
        <Card cardData={card} key={card.id} onSelectCard={checkGuess}/>
      )
 }
    </div>
  )
}