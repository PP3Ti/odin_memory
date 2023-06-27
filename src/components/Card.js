export default function Card({ pokemon }) {

  return (
    <div key={pokemon.id} className="card">
        <p>{pokemon.name}</p>
        <img src={pokemon.img} alt={pokemon.name} height='140px'/>
    </div>
  )
}