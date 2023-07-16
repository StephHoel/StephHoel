---
layout: post
title: Padronizando Commits
---

# Padronizando Commits

Para padronizar commits, uso dois utilitários: [commit lint](#commit-lint) e [commitizen](#commitizencz-cli).

Neste tutorial, mostro o que aprendi com o vídeo da Rocketseat (referenciado no final) usando os utilitários localmente (para uso global, procure as documentações no final de cada parte).

### commit lint

O Commit Lint é um pacote que te ajuda a normalizar o uso da convenção de commits e impedir que qualquer outro formato seja commitado.

Para começar a usar, é necessário já ter o projeto criado e estar na etapa de configuração do mesmo.

Na pasta raiz do projeto, instalei o commitlint com o comando abaixo:

`npm i @commitlint/config-conventional @commitlint/cli -D`

E usei o comando a seguir para adicionar as configurações no projeto:

`echo -e "module.exports = {\n  extends: ['@commitlint/config-conventional']\n}" > commitlint.config.js`

Iniciei o repositório git:

`git init`

E então instalei o husky:

`npm i husky -D`

Não posso esquecer de criar o git ignore:

`echo -e "node_modules\n.husky/" > .gitignore`

O husky usa a convenção de commits portanto é necessário usar a mesma para que o commit seja aceito/enviado (tanto no terminal quanto no source control do vscode).

Caso não conheça a convenção, [clique aqui](https://commitlint.js.org/#/concepts-commit-conventions) para conhecer.

##### Documentação: [github.com/conventional-changelog](https://github.com/conventional-changelog/commitlint)

### commitizen/cz-cli

O Commitizen é uma forma mais prática de escrever sua mensagem de commit no terminal, de forma que ela esteja sempre na convenção.

Para começar, instalei o commitizen:

`npm i commitizen -D`

Depois sua convenção:

`npx commitizen init cz-conventional-changelog --save-dev --save-exact`

Isso vai fazer aparecer um "config" no arquivo package.json

No mesmo package.json, adicionei o script abaixo para fazer meu commit direto pela linha de comando com auxílio do commitizen (sem precisar adicionar os arquivos):

```
"scripts": {
    "commit": "git add . && git-cz"
  }
```

Agora para commitar, usei `npm run commit` e completei as informações que ele me perguntou.

Ps: A extensão do vscode "source control" não reconhece que os arquivos foram commitados até você atualizá-lo manualmente.

Ps²: Cuidado com o comando npm run commit, ele vai adicionar tudo ao commit. Caso queira adicionar apenas alguns arquivos, os adicione individualmente para o stage e então use o comando `npx git-cz` para chamar o commitizen.

##### Documentação: [github.com/commitizen](https://github.com/commitizen/cz-cli)


###### Baseado no vídeo [Padronizando mensagens de commit do Git | Code/Drops #12](https://www.youtube.com/watch?v=erInHkjxkL8) do canal no youtube da [Rocketseat](https://www.youtube.com/@rocketseat)