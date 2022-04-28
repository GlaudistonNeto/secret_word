import './Game.css'

const Game = ({ verifyLetter }) => {
  return (
    <div className='game'>
      <div className="game">
        <p className="points">
          <span>Score: 000</span>
        </p>
        <h1>Guess the word: </h1>
        <h3 className="tip">
          Tip about the word: <span>Tip...</span>
        </h3>
        <div className="wordContainer">
          <span className="letter">A</span>
          <span className="blankSquere"></span>
        </div>
        <div className="letterContainer">
          <p>Try to guess a letter of the word: </p>
          <form>
            <input type="text" name="letter" maxLength="1" required />
            <button>Play</button>
          </form>
          <div className="wrongLetterContainer">
            <p>Letters already used: </p>
            <span>a, </span>
            <span>b, </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Game