import './styles.sass'
import Header from './components/Header'
import Main from './components/Main'
import { useEffect, useState } from "react"

export default function App() {

  const [pokemons, setPokemons] = useState([])
  const [clickedPokemon, setClickedPokemon] = useState([])
  const [highScore, setHighScore] = useState(0)
  const [difficulty, setDifficulty] = useState(3)

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

  function fetchPokemon(difficulty) {
    const idList = generateIdList(difficulty)
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
    fetchPokemon(difficulty)
    const display = document.querySelector('.display')
    const cards = document.querySelector('.cards')
    cards.style.display = 'flex'
    display.style.opacity = '100%'
  }

  function handleCardClick(e) {
    let currentPokemon = ''
    if (clickedPokemon.includes(e.currentTarget.firstChild.alt)) {
      if (clickedPokemon.length > highScore) {
        setHighScore(clickedPokemon.length)
      }
      fetchPokemon(difficulty)
    } else {
      currentPokemon = e.currentTarget.firstChild.alt
      setClickedPokemon(clickedPokemon => [...clickedPokemon, currentPokemon])
      handleRandomize()
    } 
  }

  useEffect(() => {
    if (clickedPokemon.length === difficulty) {
      console.log('fired diff increased')
      setHighScore(difficulty)
      setDifficulty(difficulty => difficulty + 1)
    }
  }, [difficulty, clickedPokemon.length])

  useEffect(() => {
    fetchPokemon(difficulty)
  // eslint-disable-next-line
  }, [difficulty])

  return (
    <div className="app">
      <Header clickedPokemon={clickedPokemon} highScore={highScore} />
      <Main handlePlay={handlePlay} handleCardClick={handleCardClick} pokemons={pokemons} />
    </div>
  )
}
