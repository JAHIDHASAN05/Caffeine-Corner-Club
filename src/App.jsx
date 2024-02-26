import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useLoaderData } from 'react-router-dom'
import CoffeeCard from './Components/CoffeeCard'

function App() {
const loadedCoffees= useLoaderData()

const [coffees, setCoffees]= useState(loadedCoffees)

console.log(coffees)
  return (
    <>
      <h1 className='text-6xl text-purple-600 text-center'>coffee conference : {coffees.length}</h1>
      {
        coffees.map(coffee=> <CoffeeCard key={coffee._id}
           coffee={coffee}
           setCoffees={setCoffees}
           coffees={coffees}


          
          ></CoffeeCard>)
      }
    
    </>
  )
}

export default App
