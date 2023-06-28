export default function Card({ pokemon, handleCardClick }) {

  return (
    <div key={pokemon.id} className="card">
      <div className="card-front" onClick={handleCardClick}>
        <p>{pokemon.name}</p>
        <img src={pokemon.img} alt={pokemon.name} height='140px'/>
      </div>
    </div>
  )
}