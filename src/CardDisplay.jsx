import { allMatchingBirds, allColors, getRandom } from "./birds";
import {useEffect, useState} from "react";

export default function CardDisplay({birds, setPopupTrigger, currentPair, setCurrentPair, isMatched, setIsMatched}){
  const cards = [];
  
  function handleClick(b){
    let id = b.id;
    
    //fill currentPair to reflect this flip
    if (currentPair[0]===null){
      setCurrentPair([id,null]);
    }else if(currentPair[0]!==null && currentPair[1]==null && id!==currentPair[0]){
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
      setTimeout(()=>{setPopupTrigger(true);},1000);
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
  const birdDict={"AF":"Adult Female", "AM":"Adult Male", "J": "Juvenile", "AF-J":"Adult Female/Juvenile"};
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