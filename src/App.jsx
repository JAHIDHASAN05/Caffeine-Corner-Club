import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useLoaderData } from 'react-router-dom'
import CoffeeCard from './Components/CoffeeCard'

function App() {
const loadedCoffees= useLoaderData()
console.log(loadedCoffees)
  return (
    <>
      <h1 className='text-6xl text-purple-600 text-center'>coffee conference : {loadedCoffees.length}</h1>
      {
        loadedCoffees.map(coffee=> <CoffeeCard key={coffee._id}
           coffee={coffee}
           

          
          ></CoffeeCard>)
      }
    
    </>
  )
}

export default App
