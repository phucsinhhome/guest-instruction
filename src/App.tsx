import { useState } from 'react'
import './App.css'
import { ImagesViewer } from './Component/ImagesViewer'

function App() {
  const [count, setCount] = useState(0)
  const menuURL = 'https://via.placeholder.com/150'

  return (
    <>
      <ImagesViewer/>
    </>
  )
}

export default App
