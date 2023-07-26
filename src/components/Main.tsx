export default function Main() {
  return (
    <div className="w-[85%] text-3xl min-h-[75vh]">
      <div className="text-7xl mb-8 pb-14 border-b-2 font-bold pl-8">
        Hallo, meu nome é Steph
      </div>
      <div className="flex space-x-12 items-center">
        <div className="text-2xl">
          Este blog foi pensado para ajudar outros devs!
        </div>
        <a href="#/all_posts">
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
    </div>
  )
}
