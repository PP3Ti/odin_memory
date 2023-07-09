import Cards from "./Cards"
import pokeball from '../assets/pokeball.png'

export default function Main({ handleCardClick, handlePlay, pokemons }) {

  return (
    <div className="main">
      <dialog className="start-dialog" open>
        <div className="start-screen">
          <button onClick={handlePlay}>Play!</button>
          <img src={pokeball} alt="pokeball logo" height='280px'></img>
        </div>
      </dialog>
      <Cards pokemons={pokemons} handleCardClick={handleCardClick} />
    </div>
  )
}