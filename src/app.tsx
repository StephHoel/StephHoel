import { Route, Routes } from 'react-router-dom'

import Home from './Home'
import AboutMe from './components/AboutMe'
import AllPosts from './components/AllPosts'

import './style.css'

export default function App() {
  return (
    <Routes>
      <Route path="StephHoel/" index element={<Home />} />
      <Route path="StephHoel/about_me" element={<AboutMe />} />
      <Route path="StephHoel/all_posts" element={<AllPosts />} />
    </Routes>
  )
}
