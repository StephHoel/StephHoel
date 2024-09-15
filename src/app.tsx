import { Route, Routes } from 'react-router-dom'

import './style.css'

import Layout from './Layout'
import Home from './pages/Home'
import NewPost from './pages/NewPost'

export default function App() {
  return (
    <Routes>
      {/* <Route path="StephHoel/" index element={<Home />} />
      <Route path="/" element={<Home />} /> */}
      <Route path="StephHoel/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="/StephHoel/new" element={<NewPost />} />
        {/* <Route path="/StephHoel/dash" element={<Dashboard />} />
        <Route path="/StephHoel/blog" element={<Blog />} /> */}

        {/* <Route path="/StephHoel/login" element={<Login />} />
        <Route path="/StephHoel/textos" element={<Textos />} />
        <Route path="/StephHoel/algiz" element={<Algiz />} />
        <Route path="/StephHoel/sobre" element={<Sobre />} />
        <Route path="/StephHoel/contato" element={<Contato />} /> */}

        {/* <Route path="*" element={<NoMath />} /> */}
      </Route>
    </Routes>
  )
}
