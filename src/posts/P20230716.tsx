import Code from '../components/posts/Code'
import Links from '../components/posts/Links'
import Toggle from '../components/posts/Toggle'

export default function P20230716() {
  return (
    <Toggle
      title={'3. Projeto Web com Firebase (sem servidor)'}
      date={'16 de Julho de 2023'}
    >
      <div className="space-y-4">
        <p>
          Para criar um novo projeto web, usamos o código{' '}
          <Code>npx create-react-app</Code> então aparecerá muitas opções para
          escolher, recomendo que aceite todas.
        </p>
        <p>
          Instalamos o firebase para não precisarmos do servidor para fazer a
          ponte entre banco de dados e aplicação.
        </p>
        <p>
          Criamos um novo projeto no firebase{' '}
          <Links>https://console.firebase.google.com/</Links> e seguimos as
          recomendações.
        </p>
        <p>
          Ao final, clicamos na opção &quot;web&quot; para registrar o app e
          copiamos o conteúdo de inicialização para colarmos no arquivo{' '}
          <Code>src/firebase.js</Code>
        </p>
        <p>
          Para as funções que devem ser usadas, podemos pegar como base{' '}
          <Links href="https://github.com/StephHoel/names-list">
            este projeto
          </Links>
          , nele encontramos como adicionar, ler e remover um documento no
          firebase, além do código para usar tudo isso.
        </p>

        <p>
          Como referência, deixo aqui o link para a documentação do Firebase que
          usamos no projeto citado acima:{' '}
          <Links>https://firebase.google.com/docs/firestore?hl=pt-br</Links>
        </p>

        <p>
          Com estas funções em seu novo projeto, já pode usufluir como bem
          quiser.
        </p>
      </div>
    </Toggle>
  )
}
