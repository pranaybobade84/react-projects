import { useState } from "react";

const App = () => {
  const [color,setColor]=useState('black')

  return (
    <div className="bg-black w-screen h-screen text-white" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12  px-3 w-full">
        <div className="bg-white flex flex-wrap justify-center gap-5 py-2 px-5 rounded-xl">
          <button className="bg-red-600 px-3 py-2 text-white rounded-full shadow-xl text-sm tracking-wider font-bold hover:bg-red-500" onClick={()=>setColor('red')}>RED</button>
          <button className="bg-green-600 px-3 py-2 text-white rounded-full shadow-xl text-sm tracking-wider font-bold hover:bg-green-500" onClick={()=>setColor('green')}>GREEN</button>
          <button className="bg-blue-600 px-3 py-2 text-white rounded-full shadow-xl text-sm tracking-wider font-bold hover:bg-blue-500" onClick={()=>setColor('blue')}>BLUE</button>
          <button className="bg-yellow-600 px-3 py-2 text-white rounded-full shadow-xl text-sm tracking-wider font-bold hover:bg-yellow-500" onClick={()=>setColor('yellow')}>YELLOW</button>
          <button className="bg-orange-600 px-3 py-2 text-white rounded-full shadow-xl text-sm tracking-wider font-bold hover:bg-orange-500" onClick={()=>setColor('orange')}>ORANGE</button>
          <button className="bg-pink-600 px-3 py-2 text-white rounded-full shadow-xl text-sm tracking-wider font-bold hover:bg-pink-500" onClick={()=>setColor('pink')}>PINK</button>
        </div>
      </div>
    </div>
  )
}

export default App