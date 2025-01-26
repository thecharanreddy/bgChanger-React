import { useState } from 'react'


function App() {
  const [color,setColor] = useState("tomato")
  return (
    <div className=' w-full h-screen duration:200' style={{backgroundColor:color}} >
    
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={()=> setColor('black')}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg ' style={{backgroundColor:'Black'}}>Black</button>

          <button onClick={()=> setColor('white')}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg ' style={{backgroundColor:'White'}}>White</button>

          <button onClick={()=> setColor('red')}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg ' style={{backgroundColor:'Red'}}>Red</button>

          <button onClick={()=> setColor('green')}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg ' style={{backgroundColor:'Green'}}>Green</button>

          <button onClick={()=> setColor('blue')}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg ' style={{backgroundColor:'Blue'}}>Blue</button>

          <button onClick={()=> setColor('purple')}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg ' style={{backgroundColor:'Purple'}}>Purple</button>

           <button onClick={()=> setColor('orange')}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg ' style={{backgroundColor:'orange'}}>Orange</button>          
        </div>
      </div>
    </div>
  )
}

export default App
