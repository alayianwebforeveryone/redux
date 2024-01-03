import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increament, decreament, decreamentByValue } from '../slice/Amount';


function Form() {

    const Amount = useSelector((state) => state.account.amount)
    const dispatch = useDispatch();
    const [customNum, setcustomNum] = useState(0)

    function handleInput() {
        if (customNum !== " " && !isNaN(customNum)) {
            dispatch(decreamentByValue(parseInt(customNum)))
        }
        else {
            alert("enter a number")
        }
    }

    return (
        <>
            <div className='my-10 bg-blue-300'>
                <p className='text-white'>Amount is {Amount}</p>
                <button className='bg-green-200 ' onClick={() => dispatch(increament())}>
                    Increment
                </button>
                <button
                    className='bg-slate-300 mx-3'
                    onClick={() => dispatch(decreament())}
                >
                    Decrement
                </button>
                <input type="number" name="" id="" className='bg-indigo-900 text-white'
                    value={customNum}
                    onChange={(e) => {
                        return setcustomNum(parseInt(e.target.value))
                    }}
                    placeholder='Update by custome value'
                />
                <button className='bg-slate-300 mx-3' onClick={() => handleInput(customNum)}>
                    Increment by {(!isNaN(customNum) && customNum !== '') ? customNum : 0}
                </button>

            </div>
        </>
    )
}

export default Form
