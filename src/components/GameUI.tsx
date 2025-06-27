// import React, { useState} from "react";

// function randomnNumber (range: number): number {
//  return Math.floor(Math.random() * (range+1))
// }

// const GameUI: React.FC = () => {
//  const [guessButtonDisabled, setGuessButtonDisabled] = useState(true);
//  const [inputReadOnly, setInputReadOnly] = useState (true)
//  const [newGameButtonDisabled, setNewGameButtonDisabled] = useState(false)
//  const [secretNumber, setSecretNumber] = useState (randomnNumber(100))
//  const [numberOfTrials, setNumberOfTrials] = useState(0)
//  const [guessedNumber, setGuessedNumber] =useState("")
//  const [response, setResponse] = useState("")


//  function handleNewGame() {
//   setGuessButtonDisabled(false)
//   setInputReadOnly(false)
//   setNewGameButtonDisabled(true)
//   setSecretNumber(randomnNumber)
//   setNumberOfTrials(10)
//   setResponse("")
//   setGuessedNumber("")
//  }

//  function handleLost(){
//   if (numberOfTrials === 1){
//    setResponse(`Damn!! The secret number was ${secretNumber}. You scored ${numberOfTrials*10}%`)
//    setNewGameButtonDisabled(true)
//    setInputReadOnly(true)
//    setGuessButtonDisabled(true)
//   }
//  }

//  function handlePlayerGuess(e: React.MouseEvent<HTMLButtonElement>) {
//   e.preventDefault;
//   console.log(secretNumber, guessedNumber)
//   if (+guessedNumber === secretNumber){
//    setResponse("Hurray!!! You won")
//   } else if (+guessedNumber > secretNumber) {
//    setResponse(`${guessedNumber} is high`)
//    setNumberOfTrials(numberOfTrials-1)
//    handleLost()
//   } else if (+guessedNumber < secretNumber){
//    setResponse (`${guessedNumber} is low`)
//    setNumberOfTrials(numberOfTrials-1)
//    handleLost()
//   }
//  }
 
//   return (
//     <div className="container">
//       <div className="header">
//         <h1>guess a number between 1 and 100</h1>
//         <button className="newGameBtn"  onClick ={handleNewGame} disabled = {newGameButtonDisabled} >new game</button>
//       </div>
//       <section className="gameBody">
//       <div className="guessContainer">
//         <h2>{numberOfTrials > 0 && `${numberOfTrials}  of trials remaining`}</h2>
//       </div>
//       <form>
//         <input type="number" placeholder="00" className="numBtn" readOnly ={inputReadOnly} onChange ={(e) => setGuessedNumber(e.target.value)} />
//       </form>
//       <h2>
//        {response}
//       </h2>
//       <button type="submit" className="guessBtn" disabled =   {guessButtonDisabled} onClick={handlePlayerGuess}>Guess</button>
//       </section>
//     </div>
//   );
// };

// export default GameUI
