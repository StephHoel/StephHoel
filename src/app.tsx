import { Route, Routes } from 'react-router-dom'

import Home from './Home'

import './style.css'

export default function App() {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
    </Routes>
  )
}
