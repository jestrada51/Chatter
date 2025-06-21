import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import InputForm from './components/input'

// components
import Header from './components/header.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      {/* <h1>Chatter</h1>
      
      <InputForm /> */}
    </>
  )
}

export default App
