import title from '../assets/title.png'

export default function Header() {
  return (
    <header> 
      <img src={title} alt='pokemon title' height='130px'/>
      <p>The Memory Game</p>
    </header>
  )
}