import { useState } from 'react';
import './App.css';

function App() {
  // let count=0;
  const [count, setcount] = useState(0)
  function decrementHandler(){
    setcount(count-1);
  }

  function incrementHandler(){
    setcount(count+1);
  }
  function resetHandler(){
    setcount(0);
  }

  return (
    <div className='w-[100vw] h-[100vh] flex justify-center items-center bg-[#344351] flex-col gap-10'>
      <div className='text-blue-400 font-medium text-2xl'>Increment / Decrement</div>

      <div className='bg-white flex justify-center  gap-12 rounded-sm text-[25px] text-[#344151] '>

        <button onClick={decrementHandler} className='border-r-2 text-center pb-2 w-20 text-5xl border-[#bfbfbf]'
        >-</button>
        <div className='pt-2'>
        {count}
        </div>
        <button className='border-l-2 text-center w-20 border-[#bfbfbf] pb-2 text-5xl' onClick={incrementHandler}>+</button>
      </div> 
          <button className='bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg' onClick={resetHandler}>Reset</button>
     </div>
  );
}

export default App;
