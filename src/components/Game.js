import { useRef, useState } from 'react'

// CSS
import './Game.css'

const Game = ({
  verifyLetter,
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score,
}) => {
  const [letter, setLetter] = useState('');
  const letterInputRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    
    verifyLetter(letter);

    setLetter('');

    letterInputRef.current.focus();
  }

  return (
    <div className='game'>
      <div className="game">
        <p className="points">
          <span>Score: { score }</span>
        </p>
        <h1>Guess the word: </h1>
        <h3 className="tip">
          Tip about the word: <span>{ pickedCategory }</span>
        </h3>
        <p>You still have { guesses } try(ies)</p>
        <div className="wordContainer">
          {letters.map((letter, i) => (
            guessedLetters.includes(letter) ? (
              <span key={i} className='letter'>{ letter }</span>
            ) : (
              <span key={i} className='blankSquare'></span>
            )
          ))}
        </div>
        <div className="letterContainer">
          <p>Try to guess a letter of the word: </p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="letter"
              maxLength="1"
              required 
              onChange={(e) => setLetter(e.target.value)}
              value={letter}
              ref={letterInputRef}
            />
            <button>Play</button>
          </form>
          <div className="wrongLetterContainer">
            <p>Letters already used: </p>
            {wrongLetters.map((letter, i) => (
              <span key={i}>{ letter }, </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Game