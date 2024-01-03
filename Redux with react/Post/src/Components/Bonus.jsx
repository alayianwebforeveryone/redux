import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increament } from '../slice/Bonus'


function Bnous() {
    const dispatch  = useDispatch()
    const points = useSelector(state => state.bonus.bonus)
    // console.log(points)
    return (
        <div className='mb-10 border-2 bg-black text-white'>
        <h2>Bonus</h2>
        <p>Total bonus : {points}</p>
        <button className='bg-green-300'
        onClick={()=>{
            dispatch(increament())
        }}>Increament</button>
        </div>
    )
}

export default Bnous
