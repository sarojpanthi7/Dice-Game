import { Link, Navigate } from 'react-router-dom'
import diceImg from '../assets/dice.png'
import Page2 from './Page2'
import { useNavigate } from 'react-router-dom'
const MainPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/play');
  }
  return (
    <main className='flex items-center justify-center lg:grid lg:grid-cols-2 h-screen w-screen'>
        <section className='hidden lg:block'>
            <img alt='Dice Image' src={diceImg}/>
        </section>

        <section className='flex justify-center items-center'>
           <div className='flex flex-col items-center'>
           <h1 className='font-extrabold text-6xl md:text-8xl lg:text-8xl'>DICE GAME</h1>
           <p className='block lg:hidden text-xl mt-4'>Welcome! to Dice game. Click on</p>
           <p className='block lg:hidden text-xl'>Play Now button to Play.</p>
           <button
           onClick={handleClick}
           className='w-40 bg-black text-white p-2 rounded-md lg:ml-96 mt-4 lg:mt-8'
           >Play Now</button>
           
           </div>
        </section>
    </main>
  )
}

export default MainPage
