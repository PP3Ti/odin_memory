import Card from "./Card"

export default function Cards({ pokemons }) {

  return (
    <div className="cards">
      {pokemons.map(pokemon => <Card pokemon={pokemon} />)}
    </div>
  )
}