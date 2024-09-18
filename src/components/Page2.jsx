import Box from './Box'
import { useState } from 'react';
import diceImage from '../assets/cube.png'
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
const Page2 = () => {
    const boxValues = [1,2,3,4,5,6];
    const [showRule, setShowRule] = useState(false);
    const [activeBox, setActiveBox] = useState(null);
    const [score, setScore] = useState(0);
    const [random, setRandom] = useState(0);
    const navigate = useNavigate();
    const handleClick = (value) => {
        setActiveBox(value);
    }

    const resetScore = () => {
      setScore(0);
      setRandom(0);
    }

    const handleShowRules = () => {
      setShowRule(!showRule);
    }

    const handleBack = () => {
      navigate('/');
    }

    const generateRandomNumber = () => {
     if(activeBox!=null){
      let Myrandom = Math.floor(Math.random()*6 +1);
     setRandom(Myrandom);
      if(Myrandom === activeBox){
         setScore(score+random);
      }
      else{
        setScore(score - 2);
      }
     }
    }
  return (
    <div>
    <main className='mt-8 h-screen w-screen px-6'>
        <section className="lg:flex lg:justify-between">
           <div className='flex flex-col justify-center items-center'>
             <p>Result:{random}</p>
             <p className='text-6xl lg:text-8xl  font-bold'>{score}</p>
             <p className='font-bold  text:xl lg:text-2xl'>Total Score</p>
           </div>

           <div className="flex justify-center mt-8 lg:mt-0 gap-5">
             {
                boxValues.map(value=> 
                    <Box
                     key={value}
                     value={value}
                     isActive={activeBox === value}
                     onClick={handleClick}
                     >
                        <p>{value}</p>
                    </Box>
                )
             }
           </div>
        </section>
          
        <section className='flex justify-center items-center'>
          <div className='flex flex-col mt-8 lg:mt-0'>
          <img
           className='active:animate-spin active:transition-all'
          onClick={generateRandomNumber} src={diceImage} />
          
          <div className='flex flex-col items-center gap-4'>
            <p className={`text-red-500 ${activeBox==null?"block":"hidden"}`}>Number not selected.</p>
            <p>Select the number <br></br>Click on Dice to Roll</p>
            <button
              onClick={resetScore}  
              className='w-48 p-2 font-semibold bg-white text-slate-700 border-2 border-slate-700 rounded-md'          
            >Reset Score</button>

            <button
              onClick={handleShowRules}  
              className='w-48 p-2 font-semibold bg-black text-slate-100 border-2 border-slate-700 rounded-md'          
            >{
              showRule?<p>Hide Rules</p>:<p>Show Rules</p>
            }</button>

            <button
              onClick={handleBack}  
              className='w-10 p-2 font-semibold bg-black text-slate-100 border-2 border-slate-700 rounded-md'          
            >
              <p><IoMdArrowRoundBack /></p>
            </button>
          </div>
          </div>
        </section>
    </main>
     <div className={`py-4 w-full px-4 lg:px-0 grid justify-center ${showRule?"block":"hidden"}`}>
       <div className='bg-red-50 p-8 rounded-md'>
       <h1 className='text-3xl font-bold'>How to Play Dice Game ?</h1>
       <p className='mt-3'>1. Select any Number.</p>
       <p>2. Click on Dice Image.</p>
       <p>3. After clicking on dice if selected number is equal to dice number you will get same point as dice.</p>
       <p>4. If you get wrong 2 points will be deducted.</p>
     </div>
     </div>
    </div>
    
  )
}

export default Page2
