import { useState, useEffect } from 'react';
import {flushSync} from 'react-dom';
import {allColors} from './birds.js';
import {matchingBirds} from './birds.js';
import './App.css';

function CardDisplay({birds}){
  const cards = [];
  const [isMatched, setIsMatched] = useState(Array(6).fill(false));
  const [currentPair, setCurrentPair] = useState(Array(2).fill(null));
  

  function handleClick(b){
    let id = b.id;
    
    //fill currentPair to reflect this flip
    if (currentPair[0]===null){
      setCurrentPair([id,null]);
    }else if(currentPair[0]!==null && currentPair[1]==null){
      const newPair = currentPair.slice();
      newPair[1] = id;
      setCurrentPair(newPair);
    }
    console.log(currentPair);
    
  }



  useEffect(()=>{
     if(!currentPair.includes(null)){
      if(birds[currentPair[0]].name===birds[currentPair[1]].name){
        const newIsMatched = isMatched.slice();
        newIsMatched[currentPair[0]]=true;
        newIsMatched[currentPair[1]]=true;
        setTimeout(()=>{setIsMatched(newIsMatched);},1000);

        }
        setTimeout(()=>{setCurrentPair([null,null]);},1000);   
        
      }
  },[currentPair]);

  if(!(isMatched.includes(false))){
          setTimeout(()=>{alert('You win!');},1000);
        }
  

  birds.forEach((item, i)=>{
    cards.push(
      <Card bird={item} key={item.id} revealed={currentPair.includes(i)} matched={isMatched[i]} onCardClick={()=>handleClick(item)}/>
    );
  });

  
  return(
    <div className="card-display">
      {cards}
    </div>
  );
}

function Card({bird, revealed, matched, onCardClick}){
  let src="./"+bird.name+"-"+bird.type+".png";
  let color = allColors[bird.color];
  const birdDict={"AF":"Adult Female", "AM":"Adult male", "J": "Juvenile"};
  const matchedCard = (<>
      <div className="card matched">
          <img src="./checkmark.png" ></img>
      </div>
    </>);
  const normalCard = (<>
    <div className={`card ${revealed?'flipped':''}`} onClick={onCardClick}>
      <div className="card-inner">
        <div className="card-front">
          <img src={src} />
        </div>
        <div className='card-back' style={{backgroundColor:color}}>
          <div>{bird.name}</div>
          <div>{birdDict[bird.type]}</div>
        </div>
      </div>
    </div>
    </>);

  
  if(matched){
    return(matchedCard); 
  }else{
    return(normalCard);
  }
}

function App() {
  const [currentBirds, setCurrentBirds] = useState(matchingBirds);
  
  return (
    <>
      <h1>Bird Matching</h1>
      <div>
        <ul>
          <p>Click a card to reveal the bird's identity.</p>
          <p>You can only have two cards revealed at the same time.</p>
          <p>Two cards match when they represent the same species.</p>
        </ul>  
      </div>
      <CardDisplay birds={currentBirds} />
    </>
  )
}

export default App
