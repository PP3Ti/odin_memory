import title from '../assets/title.png'
import Display from './Display'

export default function Header({ clickedPokemon, highScore}) {
  return (
    <header> 
      <Display clickedPokemon={clickedPokemon} highScore={highScore} />
      <img src={title} alt='pokemon title' height='120px'/>
      <p className='title'>The Memory Game</p>
    </header>
  )
}