import Code from '../components/posts/Code'
import Links from '../components/posts/Links'
import Toggle from '../components/posts/Toggle'

export default function P20230709() {
  return (
    <Toggle
      href={'#/all_posts'}
      title={'1. Padronizando Commits'}
      date={'09 de Julho de 2023'}
    >
      <div className="space-y-4">
        <p>
          Para padronizar commits, uso dois utilitários:{' '}
          <Links href="#/all_posts/commit-lint">commit lint</Links> e{' '}
          <Links href="#/all_posts/commitizencz-cli">commitizen</Links>.
        </p>

        <p>
          No passo a passo abaixo, mostro o que aprendi com o vídeo da
          Rocketseat (referenciado no final) usando os utilitários localmente
          (para uso global, procure as documentações no final de cada parte).
        </p>
      </div>

      <div className="space-y-4 pt-8">
        <p id="/all_posts/commit-lint" className="text-3xl">
          {'>'} commit lint
        </p>

        <p>
          O Commit Lint é um pacote para ajudar a normalizar o uso da convenção
          de commits e impedir que qualquer outro formato seja commitado.
        </p>

        <p>
          Para começar a usar, é necessário já ter o projeto criado e estar na
          etapa de configuração do mesmo (antes de começar a codar).
        </p>

        <p>
          Na pasta raiz do projeto, instalei o commitlint com o comando{' '}
          <Code>npm i @commitlint/config-conventional @commitlint/cli -D</Code>
        </p>

        <p>
          E usei o comando a seguir para adicionar as configurações no projeto:
        </p>

        <p>
          <Code>
            echo -e &quot;module.exports = {'{'}\n extends:
            [&apos;@commitlint/config-conventional&apos;] \n{'}'}&quot; &gt;
            commitlint.config.js
          </Code>
        </p>

        <p>
          Iniciei o repositório git e instalei o husky:{' '}
          <Code>git init && npm i husky -D</Code>
        </p>

        <p>
          E criei o .gitignore:{' '}
          <Code>echo -e &quot;node_modules\n.husky/&quot; &gt; .gitignore</Code>
        </p>

        <p>
          O husky usa a convenção de commits portanto é necessário usá-la para
          que o commit seja aceito/enviado (tanto no terminal quanto no
          &quot;source control&quot; do vscode).
        </p>

        <p>
          Caso não conheça a convenção,{' '}
          <Links
            href={'https://commitlint.js.org/#/concepts-commit-conventions'}
          >
            clique aqui
          </Links>{' '}
          para conhecer.
        </p>

        <p className="text-2xl">
          {'>>'} Documentação:{' '}
          <Links href={'https://github.com/conventional-changelog/commitlint'}>
            github.com/conventional-changelog
          </Links>
        </p>
      </div>

      <div className="space-y-4 pt-8">
        <p id="/all_posts/commitizencz-cli" className="text-3xl">
          {'>'} commitizen/cz-cli
        </p>

        <p>
          O Commitizen é uma forma mais prática de escrever sua mensagem de
          commit no terminal, de forma que ela esteja sempre dentro da
          convenção.
        </p>

        <p>
          Para começar, instalei o commitizen: <Code>npm i commitizen -D</Code>
        </p>

        <p>
          Depois sua convenção:{' '}
          <Code>
            npx commitizen init cz-conventional-changelog --save-dev
            --save-exact
          </Code>
        </p>

        <p>
          Isso vai fazer aparecer um &quot;config&quot; no arquivo package.json
        </p>

        <p>
          No mesmo package.json, adicionei o script a seguir para fazer meu
          commit direto pela linha de comando com auxílio do commitizen (sem
          precisar adicionar os arquivos):{' '}
          <Code>&quot;commit&quot;: &quot;git add . && git-cz&quot;</Code>
        </p>

        <p>
          Agora para commitar, usei <Code>npm run commit</Code> e respondi as
          informações que ele me perguntou.
        </p>

        <p>
          Ps: A extensão do vscode &quot;source control&quot; não reconhece que
          os arquivos foram commitados até você atualizá-lo manualmente.
        </p>

        <p>
          Ps²: Cuidado com o comando npm run commit, ele vai adicionar tudo ao
          commit. Caso queira adicionar apenas alguns arquivos, os adicione
          individualmente para o stage e então use o comando{' '}
          <Code>npx git-cz</Code> para chamar o commitizen.
        </p>

        <p className="text-2xl">
          {'>>'} Documentação:{' '}
          <Links href="https://github.com/commitizen/cz-cli">
            github.com/commitizen
          </Links>
        </p>
      </div>

      <div className="pt-8">
        <p className="text-2xl">
          {'>>>'} Baseado no vídeo{' '}
          <Links href="https://www.youtube.com/watch?v=erInHkjxkL8">
            Padronizando mensagens de commit do Git | Code/Drops #12
          </Links>{' '}
          do canal no youtube da{' '}
          <Links href="https://www.youtube.com/@rocketseat">Rocketseat</Links>.
        </p>
      </div>
    </Toggle>
  )
}
