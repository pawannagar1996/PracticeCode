
import { useState } from 'react'
import './App.css'

function App() {
 const [color , setColor] = useState("olive")

 
  return (
    <>
    <div className='w-full h-screen'
    style={{backgroundColor:color}}>


      <div className='fixed bottom-12 flex flex-wrap justify-center inset-x-0'>
        <div className="flex flex-wrap justify-center bg-white gap-3 shhadow-lg px-3 py-2 rounded-3xl text-white">

          <button className="outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor:"red"}}
          onClick={(e)=> setColor(e.target.style.backgroundColor)}>
            Red</button>

          <button className="outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor:"green"}}
          onClick={(e)=> setColor(e.target.style.backgroundColor)}>
            Green</button>
            
          <button className="outline-none px-4 py-1 rounded-full shadow-lg text-black" style={{backgroundColor:"Pink"}}
          onClick={(e)=> setColor(e.target.style.backgroundColor)}>
            Pink</button>

          <button className="outline-none px-4 py-1 rounded-full shadow-lg text-black" style={{backgroundColor:"yellow"}}
          onClick={(e)=> setColor(e.target.style.backgroundColor)}>
            Yellow</button>

          <button className="outline-none px-4 py-1 rounded-full shadow-lg " style={{backgroundColor:"blue"}}
          onClick={(e)=> setColor(e.target.style.backgroundColor)}>
            Blue</button>

        </div>
      </div>
    </div>
    </>
  )
}

export default App
