import './GameOver.css'

const GameOver = ({ retry, score }) => {
  return (
    <div className="game_over">
      <h1>Game Over</h1>
      <h2>Your score was: <span>{ score }</span></h2>
      <button onClick={retry}>Try Again</button>
    </div>
  )
}

export default GameOver