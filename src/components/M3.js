import React from 'react'
import { useState } from 'react';
const M3 = () => {
    const [user,setUser]=useState({
        name:'Vivek',
        email:'vivek2817@gmail.com',
        images:["profile.png","cover.png"]
    });
    const [input,setInput]=useState("");
    const changeUser=()=>{
        setUser((prev)=>({...prev,name:input}))
    }
  return (
    <div>
        <h2>USER :</h2>
        <input 
        style={{padding:10, marginBottom:10}}
        placeholder="Enter a new name"
        onChange={e=>setInput(e.target.value)} />
        <br/>
        <button style={{padding:10, marginBottom:10}}
        onClick={changeUser}>Change username</button>
        <br/>
        <span style={{fontFamily:"Arial",fontWeight:"bold"}}>Username is :{user.name}</span>
    </div>
  )
}

export default M3