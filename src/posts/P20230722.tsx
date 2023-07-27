import Code from '../components/posts/Code'
import Toggle from '../components/posts/Toggle'

export default function P20230722() {
  return (
    <Toggle
      title={'4. Projeto React no GitHub Pages'}
      date={'22 de Julho de 2023'}
    >
      <div className="space-y-4">
        <p>
          Demorei um pouco para conseguir, mas finalmente encontrei uma forma de
          criar um projeto react e publicar no github pages. Precisamos seguir
          alguns passos:
        </p>

        <p className="ml-4">
          1. Criar um projeto react:{' '}
          <Code>
            npx create-react-app nome_do_projeto --template typescript
          </Code>{' '}
          e sim, precisa ser react puro (sem framework).
        </p>

        <p className="ml-4">
          2. Instalar a dependência do gh-pages: <Code>npm i gh-pages -D</Code>
        </p>

        <p className="ml-4">
          3. Adicionar instruções no package.json, na parte dos scripts:
        </p>
        <div className="bg-gray-700 text-amber-600 w-fit px-2 py-1 rounded font-bold ml-8">
          <p>&quot;predeploy&quot;: &quot;npm run build&quot;,</p>
          <p>&quot;deploy&quot;: &quot;gh-pages -d build&quot;,</p>
        </div>
        <p className="ml-8">Que deve ficar mais ou menos assim:</p>
        <div className="bg-gray-700 text-amber-600 w-fit px-2 py-1 rounded font-bold ml-8">
          <p>&quot;scripts&quot;: {'{'}</p>
          <p>&nbsp; &quot;start&quot;: &quot;react-scripts start&quot;,</p>
          <p>&nbsp; &quot;build&quot;: &quot;react-scripts build&quot;,</p>
          <p>&nbsp; &quot;test&quot;: &quot;react-scripts test&quot;,</p>
          <p>&nbsp; &quot;eject&quot;: &quot;react-scripts eject&quot;,</p>
          <p>&nbsp; &quot;predeploy&quot;: &quot;npm run build&quot;,</p>
          <p>&nbsp; &quot;deploy&quot;: &quot;gh-pages -d build&quot;</p>
          <p>{'},'}</p>
        </div>

        <p>
          4. Tem que adicionar também no package.json, uma linha para a
          propriedade homepage:{' '}
          <Code>
            &quot;homepage&quot;: &quot;http://{'{'}github-username{'}'}
            .github.io/{'{'}
            repo-name{'}'}&quot;,
          </Code>{' '}
          onde os valores entre chaves devem ser alterados para o seu caso.
        </p>

        <p>5. Faça o commit para o repositório.</p>

        <p>
          6. Depois use o comando <Code>npm run deploy</Code> no terminal para
          criar as páginas estáticas.
        </p>

        <p>
          7. E então configure o github pages para a branch{' '}
          <Code>gh-pages</Code> na raiz.
        </p>

        <p className="pt-4">{'>'} Dicas adicionais:</p>

        <p>
          Caso queira implementar seu projeto, instale e use as dependências a
          seguir:
        </p>
        <p className="ml-4">
          <Code>npm i autoprefixer tailwindcss eslint postcss</Code>
        </p>
        <p className="ml-4">
          <Code>npm i -D @rocketseat/eslint-config</Code>
        </p>

        <p>
          Se instalar essas dependências, alguns arquivos precisarão ser criados
          (basta copiar cada linha de comando abaixo individualmente e usá-las
          no terminal apontando para a raiz do projeto):
        </p>
        <p>
          <Code>
            echo -e {'"{\\n'}&nbsp; \&quot;extends\&quot;: [\n&nbsp;&nbsp;&nbsp;
            \&quot;@rocketseat/eslint-config/react\&quot;\n&nbsp; ]{'\\n}"'}{' '}
            {'>'} .eslintrc.json
          </Code>
        </p>
        <p>
          <Code>
            echo -e &quot;export const plugins = {'{\\n'}
            &nbsp; tailwindcss: {'{},\\n'}&nbsp; autoprefixer: {'{},\n}" >'}{' '}
            postcss.config.js
          </Code>
        </p>
        <p>
          <Code>
            echo -e {'"/** @type {'}import(&apos;tailwindcss&apos;).Config
            {'} */'}\nexport const purge = [&apos;./src/**/*.{'{'}
            js,jsx,ts,tsx&apos;, &apos;./public/index.html&apos;]\nexport const
            theme = {'{'}\n&nbsp; extend: {'{},\\n}" >'} tailwind.config.js
          </Code>
        </p>
        <p>
          Esses comandos servem para criar os arquivos de configuração que
          precisam estar na raiz do projeto.
        </p>
      </div>
    </Toggle>
  )
}
