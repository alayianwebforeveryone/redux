import React, { useCallback, useState } from 'react'

function Form() {
    const [val, setval] = useState(3)
    const [customNum, setcustomNum] = useState()

    return (
        <>
        <div className='my-10'>
            <p>Amount: {val}</p>
            <br />
            <button className='bg-green-200 ' onClick={()=>{
                return setval(val +1);
            }}>Increament</button>
            <button className='bg-slate-300 mx-3' 
            onClick={()=>{
                return setval(val -1);
            }}
            >Decreament</button>
            <input type="number" name="" id="" className='bg-indigo-900'
            value = {customNum}
            onChange={(e)=>{
                const inputval = parseInt(e.target.value)
                    return   setcustomNum(inputval)
                    
                    
            }}
            placeholder='Update by custome value'
            />
          <button className='bg-slate-300 mx-3' onClick={()=>{
            if (customNum !== " " && !isNaN(customNum)) {
                setval(customNum +val)
            }
            else{
                alert("enter a number")
            }
          }}>Increament by {()=>{
            if(customNum !== ''){
                customNum
            }
          }}</button>
        </div>
        </>
    )
}

export default Form
