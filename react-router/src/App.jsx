import { useState } from 'react'

import './App.css'
import { Link, Outlet } from 'react-router-dom'


function App() {

  return (
    <div className="App">
      <div style={{width:"100vw",backgroundColor:"lightBlue"}}>
        <Link style={{textDecoration:"none"}} to={"/popup"}>
          Kattints ide!
        </Link>
      </div>
      <h1>Haliharcsa</h1>
      <Outlet></Outlet>
    </div>
  )
}

export default App
