---
layout: post
title: Projeto React no Github Pages
---

# Criando um Projeto React no Github Pages

Demorei um pouco para conseguir, mas finalmente encontrei uma forma de criar um projeto react e publicar no github pages.

Precisamos seguir alguns passos:

1. Criar um projeto react: `npx create-react-app nome_do_projeto --template typescript` e sim, precisa ser react puro.
2. Instalar a dependência do gh-pages: `npm i gh-pages -D`
3. Adicionar instruções no package.json, na parte dos scripts:
```
"predeploy": "npm run build",
"deploy": "gh-pages -d build",
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
1. Tem que adicionar também no package.json, uma linha para a propriedade homepage: `"homepage": "http://{github-username}.github.io/{repo-name}",` onde os valores entre chaves devem ser alterados para o seu caso.
2. Faça o commit para o repositório.
3. Depois use o comando `npm run deploy` no terminal para criar as páginas estáticas.
4. E então configure o pages para a branch `gh-pages` na raiz.

### Dicas adicionais:

Caso queira implementar seu projeto, use as dependências a seguir:

`npm i autoprefixer tailwindcss eslint postcss`

`npm i -D @rocketseat/eslint-config prettier-plugin-tailwindcss`

Alguns arquivos precisam ser criados:

.eslintrc.json
```
{
  "extends": [
    "@rocketseat/eslint-config/react"
  ]
}
```

postcss.config.js
```
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

prettier.config.js
```
module.exports = {
  plugins: [require('prettier-plugin-tailwindcss')],
}
```

tailwind.config.js
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-roboto)',
        alt: 'var(--font-bai-jamjuree)',
      },
      colors: {
        gray: {
          50: '#eaeaea',
          100: '#bebebf',
          200: '#9e9ea0',
          300: '#727275',
          400: '#56565a',
          500: '#2c2c31',
          600: '#28282d',
          700: '#1f1f23',
          800: '#18181b',
          900: '#121215',
        },
        purple: {
          50: '#f3eefc',
          100: '#d8cbf7',
          200: '#c6b2f3',
          300: '#ab8eee',
          400: '#9b79ea',
          500: '#8257e5',
          600: '#764fd0',
          700: '#5c3ea3',
          800: '#48307e',
          900: '#372560',
        },
        green: {
          50: '#e6fbef',
          100: '#b1f1ce',
          200: '#8cebb6',
          300: '#57e295',
          400: '#36dc81',
          500: '#04d361',
          600: '#04c058',
          700: '#039645',
          800: '#027435',
          900: '#025929',
        },
      },
      backgroundImage: {
        stripes:
          'linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1) 12.5%, transparent 12.5%, transparent)',
      },
      fontSize: {
        '5xl': '2.5rem',
      },
      backgroundSize: {
        stripes: '100% 8px',
      },
      blur: {
        full: '194px',
      },
    },
  },
}
```
