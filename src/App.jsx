// import { useState,useEffect } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { MainLayout } from './layout/main.layout'
import { About } from './pages/about'
import { Edit } from './pages/edit'
import { Create } from './pages/create'

function App() {

  
 
  return (
    <>
    <div  className='container'>
      <Routes >
        <Route path="/"  element={<MainLayout/>}>
          <Route index element={<About/>}/>
          <Route path="edit" element={<Edit/>}/>
          <Route path="create" element={<Create/>} />
        </Route>
      </Routes>
    </div>
 
    </>
  )
}

export default App
