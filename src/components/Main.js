import { useState } from "react"
import Cards from "./Cards"

export default function Main() {

  const [pokemons, setPokemons] = useState([])

  const generateIdList = (length) => {
    let arr = []
    let i = 0
    while (i < length) {
      const n = Math.floor(Math.random() * 151 + 1)
      if (arr.indexOf(n) === -1) {
        arr.push(n)
        i++
      }
    }
    return arr
  }

  function fetchPokemon() {
    const idList = generateIdList(12)
    let pokemonArr = []
    idList.forEach(async id => {
      const url = `https://pokeapi.co/api/v2/pokemon/${id}`
      const response = await fetch(url)
      const poke = await response.json()
      pokemonArr.push({
        id: poke.id,
        name: poke.name,
        img: poke.sprites.other["official-artwork"].front_default
      })

      if (pokemonArr.length === idList.length) {
        setPokemons(pokemonArr)
      }
    })

  }

  return (
    <div className="main">
      <button onClick={fetchPokemon}>CLICK</button>
      <Cards pokemons={pokemons}/>
    </div>
  )
}