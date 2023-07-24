export default function Header() {
  return (
    <div className="flex justify-between text-6xl pl-4 pt-4 mb-8 uppercase">
      <a
        href="#/"
        className="bg-white text-blue-950 text-xl pr-3 pl-5 py-1 tracking-[0.5rem] font-bold hover:bg-blue-400"
      >
        Steph Hoel
      </a>
      <div className="self-center justify-items-center text-2xl pr-12 space-x-8">
        <a href="#/all_posts" className="hover:text-blue-400">
          Posts
        </a>
        <a href="#/about_me" className="hover:text-blue-400">
          Sobre mim
        </a>
      </div>
    </div>
  )
}
