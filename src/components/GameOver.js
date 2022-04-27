import './GameOver.css'

const GameOver = ({ retry }) => {
  return (
    <div className="game_over">
      <h1>Game Over</h1>
      <button onClick={retry}>Try Again</button>
    </div>
  )
}

export default GameOver