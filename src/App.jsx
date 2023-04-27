import { useState, useRef, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const inputRef = useRef()
  useEffect(()=>{
    inputRef.current.focus()
    console.log(inputRef.current.value)
  })
  const login = () => {
    alert(`hello ${inputRef.current.value}`)
    inputRef.current.value = ''
    inputRef.current.focus()
  }
  return (
    <>
      <div>
       <input ref={inputRef} type="text"placeholder='name' />
       <button onClick={login}></button>
      </div>
      <h1 className='hello'>Vite + React</h1>
      <div className="card">
        <button className='count-btn' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
