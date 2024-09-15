import { Link, Outlet } from 'react-router-dom'
import Footer from './components/Footer'

import './style.css'

export default function Layout() {
  return (
    <div
      className={`app min-h-screen text-white p-4 bg-gradient-to-tl ${
        'from-[#1e2127] to-[#537ad6]'
        // page === 'posts'
        //   ? 'from-[#1e2127] to-[#733695]'
        //   : page === 'aboutme'
        //   ? 'from-[#1e2127] to-[#3c9c9f]'
        //   : 'from-[#1e2127] to-[#537ad6]'
      }`}
    >
      <header className="flex justify-between text-6xl pl-4 pt-4 mb-8 uppercase fd:space-x-12">
        <Link
          to={'/StephHoel'}
          className="bg-white text-blue-950 text-xl pr-3 pl-5 py-1 tracking-[0.5rem] font-bold
          dk:hover:bg-blue-400 dk:cursor-pointer mb:min-w-max fd:text-center fd:max-w-min"
        >
          Steph Hoel
        </Link>
        <div className="flex self-center justify-items-center text-2xl pr-12 space-x-8">
          <Link
            to={'/StephHoel/posts'}
            className="dk:hover:text-blue-400 dk:cursor-pointer"
          >
            Posts
          </Link>
          <Link
            to={'/StephHoel/aboutme'}
            className="dk:hover:text-blue-400 dk:cursor-pointer fd:text-center"
          >
            Sobre mim
          </Link>
        </div>
      </header>

      <Outlet />

      <footer>
        <Footer />
      </footer>
    </div>
  )
}
