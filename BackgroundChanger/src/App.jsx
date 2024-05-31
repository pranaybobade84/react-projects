import {useState} from 'react';
const App = () => {
  const [color, setColor] = useState ('black');

  return (
    <div
      className="bg-black w-screen h-screen text-white"
      style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12  px-3 w-full">
        <div className="bg-white flex flex-wrap justify-center gap-5 py-2 px-5 rounded-xl">
          {['red','blue','green','yellow','pink'].map (color => {
            return <button className={`bg-${color}-600  px-3 py-2 text-white rounded-full shadow-xl text-sm tracking-wider font-bold hover:bg-${color}-500`} key={color} onClick={()=>setColor(color)}>{color}</button>;
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
