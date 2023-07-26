import P20230709 from '../posts/P20230709'
import P20230710 from '../posts/P20230710'
import P20230716 from '../posts/P20230716'
import P20230722 from '../posts/P20230722'

export default function AllPosts() {
  return (
    <div className="text-white p-4">
      <div className="mb-20">
        <p className="text-5xl mb-4">Posts</p>
        <p className="text-3xl">
          Tenho alguns textos que gostaria de compartilhar com os devs
          iniciantes ou não que sempre esquecem uma coisinha ou outra! É só
          clicar nos títulos abaixo para abrir o texto completo.
        </p>
      </div>

      <P20230709 />

      <P20230710 />

      <P20230716 />

      <P20230722 />
    </div>
  )
}
