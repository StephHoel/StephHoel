import { useState } from 'react'

import AboutMe from './components/AboutMe'
import AllPosts from './components/AllPosts'
import Footer from './components/Footer'

import './style.css'

export default function Home() {
  const [page, setPage] = useState('')

  return (
    <div
      className={`app min-h-screen text-white p-4 bg-gradient-to-tl ${
        page === 'posts'
          ? 'from-[#1e2127] to-[#733695]'
          : page === 'aboutme'
          ? 'from-[#1e2127] to-[#3c9c9f]'
          : 'from-[#1e2127] to-[#537ad6]'
      }`}
    >
      <header className="flex justify-between text-6xl pl-4 pt-4 mb-8 uppercase fd:space-x-12">
        <div
          onClick={() => setPage('')}
          className="bg-white text-blue-950 text-xl pr-3 pl-5 py-1 tracking-[0.5rem] font-bold
          dk:hover:bg-blue-400 dk:cursor-pointer mb:min-w-max fd:text-center fd:max-w-min"
        >
          Steph Hoel
        </div>
        <div className="flex self-center justify-items-center text-2xl pr-12 space-x-8">
          <div
            onClick={() => {
              setPage('posts')
            }}
            className="dk:hover:text-blue-400 dk:cursor-pointer"
          >
            Posts
          </div>
          <div
            onClick={() => {
              setPage('aboutme')
            }}
            className="dk:hover:text-blue-400 dk:cursor-pointer fd:text-center"
          >
            Sobre mim
          </div>
        </div>
      </header>
      <main className="m-4 mb:py-12 mb:px-4 dk:mt-24">
        {page === 'aboutme' ? (
          <AboutMe />
        ) : page === 'posts' ? (
          <AllPosts />
        ) : (
          /* main / home */
          <div
            className="dk:w-[85%] dk:justify-center dk:mx-auto
            mb:w-full mb:mt-[15vh]
            fd:w-full fd:mt-[5vh] text-3xl"
          >
            <div className="mb-8 pb-14 pl-8 border-b-2 font-bold dk:text-7xl mb:text-6xl fd:text-4xl">
              Hallo, meu nome é Steph
            </div>

            <div className="dk:flex dk:space-x-12 dk:items-center">
              <div
                className="dk:text-4xl dk:pb-0
                mb:pb-16 mb:text-center
                fd:pb-16 fd:text-center"
              >
                Este blog foi pensado para ajudar outros devs!
              </div>
              <div
                className="flex border p-4 items-center
                dk:hover:text-blue-400 dk:hover:border-blue-400 dk:cursor-pointer dk:w-fit
                mb:w-full mb:justify-center fd:justify-center"
                onClick={() => {
                  setPage('posts')
                }}
              >
                <p className="tracking-[0.5rem] uppercase text-2xl fd:text-center">
                  Veja os Posts!
                </p>
                <i className="ph ph-arrow-right text-5xl"></i>
              </div>
            </div>
          </div>
        )}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
