import './style.css'

export default function App() {
  return (
    <div className="app min-h-screen bg-[#282c34] text-white p-4">
      <header className="flex justify-between text-6xl pl-4 pt-4 mb-8 uppercase">
        <a
          href="/StephHoel/"
          className="bg-white text-blue-950 text-xl pr-3 pl-5 py-1 tracking-[0.5rem] font-bold hover:bg-blue-400"
        >
          Steph Hoel
        </a>
        <div className="self-center justify-items-center text-2xl pr-12 space-x-8">
          <a href="all_posts.html" className="hover:text-blue-400">
            All Posts
          </a>
          <a href="about_me.html" className="hover:text-blue-400">
            Sobre mim
          </a>
        </div>
      </header>
      <main className="m-4 text-3xl p-12 w-[85%] mt-24">
        <div className="text-7xl mb-8 pb-14 border-b-2 font-bold pl-8">
          Hallo, meu nome é Steph
        </div>
        <div className="flex space-x-12 items-center">
          <div className="text-2xl">
            Este blog foi pensado para ajudar outros devs!
          </div>
          <a href="all_posts.html">
            <div className="flex border p-4 items-center hover:text-blue-400 hover:border-blue-400 cursor-pointer">
              <div className="tracking-[0.5rem] uppercase text-2xl">
                Veja os Posts!
              </div>
              <div className="text-5xl">
                <i className="ph ph-arrow-right"></i>
              </div>
            </div>
          </a>
        </div>
      </main>
      <footer className="mx-8 space-y-2 flex justify-between items-center">
        <div>© Steph Hoel</div>
        <div className="text-6xl space-x-4">
          <a
            href="https://github.com/StephHoel"
            className="hover:text-blue-400"
            target="_blank"
            rel="noreferrer"
          >
            <i className="ph ph-github-logo" />
          </a>
          <a
            href="https://www.linkedin.com/in/StephHoel/"
            className="hover:text-blue-400"
            target="_blank"
            rel="noreferrer"
          >
            <i className="ph ph-linkedin-logo" />
          </a>
          <a
            href="https://www.instagram.com/steph.hoel/"
            className="hover:text-blue-400"
            target="_blank"
            rel="noreferrer"
          >
            <i className="ph ph-instagram-logo" />
          </a>
        </div>
      </footer>
    </div>
  )
}
