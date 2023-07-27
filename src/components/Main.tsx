export default function Main() {
  return (
    <div className="w-[85%] text-3xl min-h-[75vh] justify-center">
      <div className="mb-8 pb-14 border-b-2 font-bold pl-8 dk:text-7xl mb:text-6xl">
        Hallo, meu nome é Steph
      </div>
      <div className="dk:flex space-x-12 items-center">
        <div className="text-2xl mb:pb-4">
          Este blog foi pensado para ajudar outros devs!
        </div>
        <a href="#/all_posts">
          <div className="flex border p-4 items-center cursor-pointer hover:text-blue-400 hover:border-blue-400">
            <div className="tracking-[0.5rem] uppercase text-2xl">
              Veja os Posts!
            </div>
            <div className="text-5xl">
              <i className="ph ph-arrow-right"></i>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}
