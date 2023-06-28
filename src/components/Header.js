import title from '../assets/title.png'

export default function Header() {
  return (
    <header> 
      <img src={title} alt='pokemon title' height='150px'/>
      <p>The Memory Game</p>
    </header>
  )
}