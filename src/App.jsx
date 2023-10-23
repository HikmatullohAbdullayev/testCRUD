import { useState,useEffect } from 'react'
import './App.css'
import { Button } from './components/button'
import { CofeIcon } from './assets/icon/cofeIcon'

function App() {

  
 
  return (
    <>
  <Button startIcon={CofeIcon} variant={"second"}>tugma</Button>
  <Button endIcon={CofeIcon} variant={"frist"}>tugma</Button>
  <Button variant={"text"}>tugma</Button>
  <Button >tugma</Button>
    </>
  )
}

export default App
