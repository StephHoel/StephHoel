import Links from '../components/posts/Links'
import Toggle from '../components/posts/Toggle'

export default function P20230915() {
  return (
    <Toggle
      title={'5. Tipos de padronizações de commits'}
      date={'15 de Setembro de 2023'}
    >
      <div className="space-y-4">
        <p>
          Abaixo estou deixando alguns tipos de commit e suas explicações para
          que você use da form mais assertiva possível.
        </p>
        <p>
          <span className="font-bold underline">build</span>: alterações que
          afetam o sistema de build ou dependências externas
        </p>
        <p>
          <span className="font-bold underline">static</span>: alterações no
          conteúdo de arquivos estáticos (dados .json, imagens, etc)
        </p>
        <p>
          <span className="font-bold underline">ci</span>: alterações em nossos
          arquivos e scripts de configuração de CI
        </p>
        <p>
          <span className="font-bold underline">cd</span>: alterações em nossos
          arquivos e scripts de configuração para CD
        </p>
        <p>
          <span className="font-bold underline">docs</span>: somente alterações
          na documentação
        </p>
        <p>
          <span className="font-bold underline">feat</span>: um novo recurso
        </p>
        <p>
          <span className="font-bold underline">fix</span>: uma correção de bug
          da aplicação
        </p>
        <p>
          <span className="font-bold underline">perf</span>: alteração de código
          que melhora o desempenho da aplicação e não altera a forma como o
          usuário utiliza a aplicação
        </p>
        <p>
          <span className="font-bold underline">refactor</span>: alteração de
          código, que não corrige um bug e nem altera a forma como o usuário
          utiliza a aplicação
        </p>
        <p>
          <span className="font-bold underline">improve</span>: alguma alteração
          de código que melhore o comportamento de um recurso
        </p>
        <p>
          <span className="font-bold underline">style</span>: alterações que não
          afetam o significado do código (espaço em branco, formatação, ponto e
          vírgula, etc)
        </p>
        <p>
          <span className="font-bold underline">test</span>: adicionando testes
          ausentes ou corrigindo testes existentes
        </p>
        <p>
          <span className="font-bold underline">revert</span>: reverter para um
          commit anterior
        </p>

        <div className="pt-8 text-2xl">
          {'>>>'} Baseado no artigo{' '}
          <Links href="https://gist.github.com/ivanrosolen/b5fc4f281b427949d24e849d982b888b#tipo">
            Guia para mensagens de commits
          </Links>
          .
        </div>
      </div>
    </Toggle>
  )
}
