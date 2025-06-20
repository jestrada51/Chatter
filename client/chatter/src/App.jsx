import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'
import InputForm from './components/input'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Chatter</h1>
      <InputForm />
    </>
  )
}

export default App
