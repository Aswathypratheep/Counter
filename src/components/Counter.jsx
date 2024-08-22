import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/counterSlice';

function Counter() {
  const countervalue=useSelector((state)=>state.counter.value);
  const [Range,setRange] = useState('')
  const dispatch = useDispatch();
  console.log(countervalue);
  console.log(Range);
  
  
  return (
    <div>
      <div className='d-flex flex-column align-items-center justify-content-center w-100 mt-3'>
        <h2 style={{fontSize:"70px",color:"black"}}>{countervalue}</h2>
<div className='mt-5'>
    <button className='btn btn-warning p-2' onClick={()=>dispatch(decrement(Number(Range)))}>DECREMENT</button>
    <button className='btn btn-success p-2 ms-3' onClick={()=>dispatch(increment(Number(Range)))}>INCREMENT</button>
    <button className='btn btn-danger p-2 ms-3' style={{width:"120px"}} onClick={()=>dispatch(reset())}>RESET</button>
</div>
      </div>
      <div>
        <input type='text' className='form-control mt-3 w-100' style={{borderColor:'blue'}} placeholder='Enter the Range' 
        onChange={(e)=>setRange(e.target.value)}/>
      </div>
    </div>
  )
}

export default Counter
