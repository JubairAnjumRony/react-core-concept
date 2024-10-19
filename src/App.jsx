import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Players from './players'
import Friends from './friend'
import Posts from './Post'


function App() {
  const handleClick =()=>{
    alert('button 2 clicked')
  }
  
  const handleClick2 =()=>{
    alert('button 3 clicked')
  }
  const addToFive =(num) =>{
    alert(num+5)
  }
  return (
    <>
    <Posts></Posts>
    <Friends></Friends>
    <Players></Players>
    <Counter></Counter>
    <h3>React Core Concepts 2</h3>
    {/* button onclick="handleClick()">Click Me button */}
    <button onClick ={handleClick}>Click Me</button>
    <button onClick ={handleClick2}>Click2</button>
    <button onClick={() =>{alert('third clicked')}}>Third</button>
    <button onClick = {()=> addToFive(3)}>ADDNUM</button>
    </>
  )
}

export default App
