import React, { useState } from 'react'

function Bnous() {
    const [bonus, setBonus] = useState(0)
    return (
        <div className='mb-10 border-2 bg-black text-white'>
        <h2>Bonus</h2>
        <p>Total bonus : {bonus}</p>
        <button className='bg-green-300'
        onClick={()=>{
            setBonus(bonus +1)
        }}>Increament</button>
        </div>
    )
}

export default Bnous
