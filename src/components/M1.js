import React from 'react'
import { useState } from 'react';
const M1 = () => {
    const[number,setNumber]=useState(0);
    const increase=()=>{
        setNumber(number+1);
    }
    const asyncIncrease=()=>{
        setTimeout(()=>{
            setNumber((prevNum)=>prevNum+1);
            //setNumber(number+1);
        },5000)
        
    }
  return (
    <div>
       <div>M1</div>
       <button onClick={increase}>Increase</button>
       <button onClick={asyncIncrease}>Async - Increase</button>
       <br/>
       {number}
    </div>
  )
}

export default M1;