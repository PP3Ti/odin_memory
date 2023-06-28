export default function Display({ clickedPokemon, highScore }) {
  return (
    <div className="display">
      <div className="scores">
        <p className="score current-score">Score: {clickedPokemon.length}</p>
        <p className="score highscore">Highscore: {highScore}</p>
      </div>
    </div>
  )
}