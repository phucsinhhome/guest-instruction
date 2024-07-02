import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const menuURL = 'https://via.placeholder.com/150'

  return (
    <>
      <div>
        <img src={menuURL} alt="Food Menu" />
      </div>
    </>
  )
}

export default App
