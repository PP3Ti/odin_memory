import Card from "./Card"

export default function Cards({ pokemons, handleCardClick }) {

  return (
    <div className="cards">
      {pokemons.map(pokemon => <Card pokemon={pokemon} handleCardClick={handleCardClick}/>)}
    </div>
  )
}