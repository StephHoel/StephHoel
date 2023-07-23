---
layout: post
title: Projeto React no Github Pages
---

# Criando um Projeto React no Github Pages

Demorei um pouco para conseguir, mas finalmente encontrei uma forma de criar um projeto react e publicar no github pages.

Precisamos seguir alguns passos:

1. Criar um projeto react: `npx create-react-app "nome do projeto"` e sim, precisa ser react puro.
2. Instalar a dependência do gh-pages: `npm install gh-pages --save-dev`
3. Adicionar instruções no package.json, na parte dos scripts:
```
"predeploy" : "npm run build",
"deploy" : "gh-pages -d build",
```
Que deve ficar mais ou menos assim:
```
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  },
```
4. Tem que adicionar também no package.json, uma linha para a propriedade homepage: `"homepage": "http://{github-username}.github.io/{repo-name}",` onde os valores entre chaves devem ser alterados para o seu caso.
5. Faça o commit para o repositório.
6. Depois use o comando `npm run deploy` no terminal para criar as páginas estáticas.
7. E então configure o pages para a branch `gh-pages` na raiz.