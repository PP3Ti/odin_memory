export default function Card({ pokemon, handleCardClick }) {

  return (
    <div key={pokemon.id} className="card" onClick={handleCardClick} >
        <img src={pokemon.img} alt={pokemon.name} />
    </div>
  )
}