import { useState,useEffect } from 'react'
import './App.css'

function App() {

  const [data, setData ] = useState([]) 
  
  useEffect(() => {
      fetch("https://testserver-ql7j.onrender.com/posts")
      .then((fetchData)=> fetchData.json(""))
      .then((fData) => setData(fData))
   
  }, [setData])
console.log(data);
  return (
    <>
     {data.map((item) => {
      return(
        
      <h2 key={item.id}>{item.title}</h2>
      )
     })}
    </>
  )
}

export default App
