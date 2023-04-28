import { useState, useRef, useEffect } from 'react'
import './App.css'
import Input from './components/Input'
import Page from './components/Page'

function App() {
  const [isDark, setIsDark] = useState(false)
  return (
    <>
      <Page isDark={isDark} setIsDark={setIsDark} />
    </>
  )
}

export default App
