import React, {useReducer } from "react";

function randomnNumber (range: number): number {
 return Math.floor(Math.random() * (range+1))
}


type reducerState = {
 guessButtonDisabled: boolean;
 inputReadOnly: boolean;
 newGameButtonDisabled: boolean;
 secretNumber: number;
 numberOfTrials: number;
 guessedNumber: string;
 response: string;
};

const initialReducerState: reducerState = {
 guessButtonDisabled: true,
 inputReadOnly: true,
 newGameButtonDisabled: false,
 secretNumber: randomnNumber(100),
 numberOfTrials: 0,
 guessedNumber: "",
 response: "",
};

type reducerAction = {
 type: string;
 payload?: any;
}

  function reducer(state: reducerState, action: reducerAction): reducerState {
   switch (action.type) {
     case "NEW_GAME":
       return {
         ...state,
         guessButtonDisabled: false,
         inputReadOnly: false,
         newGameButtonDisabled: true,
         secretNumber: randomnNumber(100),
         numberOfTrials: 10,
         response: "",
         guessedNumber: "",
       };
     case "SET_GUESSED_NUMBER":
       return { ...state, guessedNumber: action.payload };
     case "SET_RESPONSE":
       return { ...state, response: action.payload };
     case "DECREMENT_TRIAL":
       return { ...state, numberOfTrials: state.numberOfTrials - 1 };
     case "GAME_OVER":
       return {
         ...state,
         guessButtonDisabled: true,
         inputReadOnly: true,
         newGameButtonDisabled: true,
       };
     default:
       return state;
   }
 }
 
 const GameUI: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialReducerState);

  function handleNewGame() {
    dispatch({ type: "NEW_GAME" });
  }

  function handleLost() {
    if (state.numberOfTrials === 1) {
      dispatch({
        type: "SET_RESPONSE",
        payload: `Damn!! The secret number was ${state.secretNumber}. You scored ${state.numberOfTrials *10}%`,
      });
      dispatch({ type: "GAME_OVER" });
    }
  }

  function handlePlayerGuess(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    console.log(state.secretNumber, state.guessedNumber);
    const guess = +state.guessedNumber;

    if (guess === state.secretNumber) {
      dispatch({ type: "SET_RESPONSE", payload: `Hurray!!! You won. You scored ${state.numberOfTrials*10}%`});
      dispatch({ type: "GAME_OVER" });
    } else if (guess > state.secretNumber) {
      dispatch({
        type: "SET_RESPONSE",
        payload: `${state.guessedNumber} is high.`,
      });
      dispatch({ type: "DECREMENT_TRIAL" });
      handleLost();
    } else if (guess < state.secretNumber) {
      dispatch({
        type: "SET_RESPONSE",
        payload: `${state.guessedNumber} is low.`,
      });
      dispatch({ type: "DECREMENT_TRIAL" });
      handleLost();
    }
  }

  return (
    <div className="container">
      <div className="header">
        <h1>guess a number between 1 and 100</h1>
        <button
          className="newGameBtn"
          onClick={handleNewGame}
          disabled={state.newGameButtonDisabled}
        >
          new game
        </button>
      </div>
      <section className="gameBody">
        <div className="guessContainer">
          <h2>
            {state.numberOfTrials > 0 &&
              `${state.numberOfTrials} of trials remaining`}
          </h2>
        </div>
        <form>
          <input
            type="number"
            placeholder="00"
            className="numBtn"
            readOnly={state.inputReadOnly}
            value={state.guessedNumber}
            onChange={(e) =>
              dispatch({ type: "SET_GUESSED_NUMBER", payload: e.target.value })
            }
          />
        </form>
        <h2>{state.response}</h2>
        <button
          type="submit"
          className="guessBtn"
          disabled={state.guessButtonDisabled}
          onClick={handlePlayerGuess}
        >
          Guess
        </button>
      </section>
    </div>
  );
};

export default GameUI;
