import AboutMe from './components/AboutMe'
import AllPosts from './components/AllPosts'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'

import './style.css'

export default function Home() {
  return (
    <div className="app min-h-screen bg-[#282c34] text-white p-4">
      <header>
        <Header />
      </header>
      <main className="m-4 p-12 mt-24">
        <div id="/">
          <Main />
        </div>
        <div id="/about_me" className="min-h-screen">
          <AboutMe />
        </div>
        <div id="/all_posts" className="min-h-screen">
          <AllPosts />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
