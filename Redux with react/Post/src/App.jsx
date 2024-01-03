import { useState } from 'react'
import './App.css'
import Form from './Components/form'
import Bonus from './Components/Bonus'
import { useSelector } from 'react-redux'

function App() {
  const Amount = useSelector((state) => state.account.amount)
  console.log(Amount);
  const bonous = useSelector((state) => state.bonus.bonus)
  console.log(Bonus);

  return (
    <>
      <div className='bg-black text-white border-3'>
        <h2 className=" text-green-300">App</h2>
        <p>Current Amount: {Amount}</p>
        <p>Current Bonous {bonous}:</p>

      </div>
      <Form />
      <Bonus />
    </>

  )
}

export default App
