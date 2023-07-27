import Code from '../components/posts/Code'
import Toggle from '../components/posts/Toggle'

export default function P20230710() {
  return (
    <Toggle title={'2. Comandos Git'} date={'10 de Julho de 2023'}>
      <div className="space-y-4">
        <p>
          Neste artigo pretendo deixar alguns comandos git para não esquecer
          quando for necessário.
        </p>
        <p>
          Clonar o repositório: <Code>{'git clone {url}'}</Code>
        </p>
        <p>
          Adicionar todos os arquivos ao staged: <Code>git add .</Code>
        </p>
        <p>
          Adicionar apenas o arquivo nomeado ao staged:{' '}
          <Code>{'git add {nome_do_arquivo}'}</Code>
        </p>
        <p>
          Fazer um novo commit:{' '}
          <Code>git commit -m &quot;sua mensagem aqui&quot;</Code>
        </p>
        <p>
          Puxar todos os commits remotos: <Code>git pull</Code>
        </p>
        <p>
          Empurrar todos os commits locais: <Code>git push</Code>
        </p>
        <p>
          Remover todos os arquivos do repositório (obrigando fazer um novo
          commit para carregar todos novamente):{' '}
          <Code>{'git rm -r --cached .'}</Code>
        </p>
        <p>
          Remover apenas o arquivo nomeado do repositório:{' '}
          <Code>{'git rm -r --cached {nome_do_arquivo}'}</Code>
        </p>
      </div>
    </Toggle>
  )
}
