
import { useState } from 'react'
import './App.css'
import { useCallback } from 'react';
import { useEffect, useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const [length, setLength] = useState(6);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef()

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) { str += "0123456789" }
    if (charAllowed) { str += "!#$%&*?@_~" }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [
    length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password)
    toast('Password Copy', {
      duration: 4000,
      position: 'top-center',
    
      // Styling
      style: {},
      className: '',
    
      // Custom Icon
      icon: '👏',
    
      // Change colors of success/error/loading icon
      iconTheme: {
        primary: '#000',
        secondary: '#fff',
      },
    
      // Aria
      ariaProps: {
        role: 'status',
        'aria-live': 'polite',
      },
    });
  }
    , [password])

  useEffect(() => { passwordGenerator() }
    , [passwordGenerator])

  return (
    <>
      <div className='w-full max-w-xl mx-auto text-orange-500 rounded-lg px-10 py-10 bg-gray-700'>
        <h1 className='text-4xl text-center text-white mb-10'>Password Genrater</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-5'>

          <input className='outline-none w-full py-1 px-3'
            type='text' value={password} placeholder='Password' readOnly
            ref={passwordRef}
          />

          <button
            
            onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-700 text-white px-3 py-0.3 shrink-0'>Copy</button>
        </div>

        <div className='flex text-sm gap-x-2 text-l'>

          <div className="flex items-center gap-x-1">
            <input className='cursor-pointer'
              type='range' min={6} max={100} value={length}
              onChange={(e) => { setLength(e.target.value) }} />
            <label>Length : {length}</label>

          </div>

          <div className="flex items-center gap-x-1">
            <input className='cursor-pointer'
              type='checkbox'
              defaultChecked={numberAllowed}
              onChange={() => { setNumberAllowed((prev) => !prev) }} />
            <label>Number</label>

          </div>

          <div className="flex items-center gap-x-1">
            <input className='cursor-pointer'
              type='checkbox'
              defaultChecked={charAllowed}
              onChange={() => { setCharAllowed((prev) => !prev) }} />
            <label>Charector</label>

          </div>

        </div>


      </div>
    </>
  )
}

export default App
