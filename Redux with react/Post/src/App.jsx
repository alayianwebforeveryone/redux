import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Components/form'
import Bnous from './Components/Bnous'
import Structure from './Components/Structure'
import Bonus from './slice/Bonus'
import { useSelector } from 'react-redux'

function App() {
  const [bonusVal, setBonus] = useState(0)
  const amount = useSelector((state)=> state.amount)
  console.log(amount);
  const bonus = useSelector((state)=> state.bonus)
  console.log(bonusVal);
  
  return (
    <div className='bg-indigo-300'>
       <div className='mb-10 border-2 bg-black text-white'>
        <h2>Bonus</h2>
        <p>Total bonus : {bonusVal}</p>
        <button className='bg-green-300'
        onClick={()=>{
            setBonus(bonusVal +1)
        }}>Increament</button>
        </div>
        <Form/>
        <Bonus/>
        
      

    </div>
  )
}

export default App
