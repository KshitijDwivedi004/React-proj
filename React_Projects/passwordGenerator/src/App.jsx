import { useState, useCallback, useEffect } from 'react';
import './App.css';
import { useRef } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [allowNumbers, setAllowNumbers] = useState(false);
  const [allowSpecialChars, setAllowSpecialChars] = useState(false);
  const [password, setPassword] = useState('');

  const passwordGenerator = useCallback(() => {
    let charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (allowNumbers) {
      charSet += '0123456789';
    }

    if (allowSpecialChars) {
      charSet += '!@#$%^&*():</{}|>~`';
    }

    let newPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charSet.length);
      newPassword += charSet.charAt(randomIndex);
    }

    setPassword(newPassword);
  }, [length, allowNumbers, allowSpecialChars, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, allowNumbers, allowSpecialChars, passwordGenerator]);


  // UseRef hook
  const passwordRef=useRef(null);

  const copyPasswordToClipBoard = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])




  return (
    <div className="w-full h-screen flex justify-center items-center bg-zinc-800 text-orange">
      <div className="w-1/2 h-[200px] rounded-lg flex flex-col bg-zinc-900 text-white">
        <h1 className="text-center text-2xl font-bold mt-4 text-white">Password Generator</h1>

        <div className="flex justify-center mt-5 w-auto mx-20 text-white">
          <input
            ref={passwordRef}
            className="text-pink-700 w-full rounded-l-lg z-10 px-5 py-1.5 font-bold tracking-wider text-red placeholder:text-slate-400"
            type="text"
            name=""
            id=""
            value={password}
            placeholder="Get Your Password Here..."
            readOnly // Make password input read-only
          />
          <div className="bg-green-700 items-center flex rounded-r-lg px-1 hover:bg-green-900" onClick={copyPasswordToClipBoard}
          >
            Copy
          </div>
        </div>

        <div className="flex gap-x-3 text-base mt-4 ml-20 text-orange-400">
          <input
            onChange={(e) => setLength(parseInt(e.target.value))} // Ensure numeric input
            className="w-[100px] inline-block cursor-pointer"
            type="range"
            min={6}
            max={30}
            value={length}
          />
          <label htmlFor="">Length: {length}</label>

          <input
            className="form-checkbox rounded text-pink-500"
            type="checkbox"
            name="number"
            id="number"
            checked={allowNumbers} // Reflect state in checkbox
            onChange={() => setAllowNumbers(!allowNumbers)}
          />
          <label htmlFor="number">Number</label>

          <input
            type="checkbox"
            name="Special"
            id="Special"
            checked={allowSpecialChars} // Reflect state in checkbox
            onChange={() => setAllowSpecialChars(!allowSpecialChars)}
          />
          <label htmlFor="Special">Special Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
