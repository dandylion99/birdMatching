import { allMatchingBirds, getRandom } from "./birds";

export default function Popup({popupTrigger, setPopupTrigger, setCurrentBirds, setCurrentPair, setIsMatched}){
  
  
    return (popupTrigger)?
  (<>
  <div className="popup">
    <div className="popup-inner">
      <div><h1>You win!</h1></div>
      <button onClick={()=>{
        setPopupTrigger(false); 
        setCurrentPair([null,null]);
        let newSelectedBirds = getRandom(allMatchingBirds);
        setCurrentBirds(newSelectedBirds);
        setIsMatched(Array(6).fill(false));
        }}>Start New Game </button>
    </div>
  </div>
  </>):null;
  
}