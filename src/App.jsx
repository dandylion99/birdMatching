import { useState, useEffect } from 'react';
import {allMatchingBirds, getRandom} from './birds.js';
import Popup from './Popup.jsx';
import CardDisplay from './CardDisplay.jsx';
import './App.css';

function App() {
  let selectedBirds = getRandom(allMatchingBirds);
  const [currentBirds, setCurrentBirds] = useState(selectedBirds);
  const [popupTrigger, setPopupTrigger] = useState(false);
  const [currentPair, setCurrentPair] = useState(Array(2).fill(null));
  const [isMatched, setIsMatched] = useState(Array(6).fill(false));

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
      <CardDisplay birds={currentBirds} popupTrigger={popupTrigger} setPopupTrigger={setPopupTrigger} currentPair={currentPair} setCurrentPair={setCurrentPair} isMatched={isMatched} setIsMatched={setIsMatched}/>
      <Popup popupTrigger={popupTrigger} setPopupTrigger={setPopupTrigger} setCurrentBirds={setCurrentBirds} setCurrentPair={setCurrentPair} setIsMatched={setIsMatched} />
    </>
  )
}

export default App
