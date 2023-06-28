import { useState } from "react"
import Cards from "./Cards"
import Display from "./Display"
import pokeball from '../assets/pokeball.png'

export default function Main() {

  const [pokemons, setPokemons] = useState([])
  const [clickedPokemon, setClickedPokemon] = useState([])
  const [highScore, setHighScore] = useState(0)

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
        setClickedPokemon([])
      }
    })
  }

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        const temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
    return arr
  }

  const handleRandomize = () => {
    setPokemons([...shuffle(pokemons)])
  }

  const handlePlay = (e) => {
    e.target.parentElement.parentElement.close()
    fetchPokemon()
    const display = document.querySelector('.display')
    display.style.opacity = '100%'
  }

  function handleCardClick(e) {
    if (clickedPokemon.includes(e.currentTarget.firstChild.textContent)) {
      if (clickedPokemon.length > highScore) {
        setHighScore(clickedPokemon.length)
      }
      fetchPokemon()
    } else {
      handleRandomize()
      setClickedPokemon([...clickedPokemon, e.currentTarget.firstChild.textContent])
    }

  }

  return (
    <div className="main">
      <dialog className="start-dialog" open>
        <div className="start-screen">
          <button onClick={handlePlay}>Play!</button>
          <img src={pokeball} alt="pokeball logo" height='280px'></img>
        </div>
      </dialog>
      <Display clickedPokemon={clickedPokemon} highScore={highScore} />
      <Cards pokemons={pokemons} handleCardClick={handleCardClick} />
      <Display clickedPokemon={clickedPokemon} highScore={highScore} />
    </div>
  )
}