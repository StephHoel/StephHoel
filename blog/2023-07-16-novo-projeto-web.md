---
layout: post
title: Projeto Web com Firebase
---

# Criando um projeto web novo com Firebase

Para criar um novo projeto web, usamos o código `npx create-react-app` então aparecerá muitas opções para escolher, recomendo que aceite todas.

Instalamos o firebase para não precisarmos do servidor para fazer a ponte entre banco de dados e aplicação.

Criamos um novo projeto no firebase `https://console.firebase.google.com/` e seguimos as recomendações. Ao final, clicamos na opção "web" para registrar o app e copiamos o conteúdo de inicialização para colarmos no arquivo `src/firebase.js`

Para as funções que devem ser usadas, podemos pegar como base [este projeto](https://github.com/StephHoel/names-list), nele encontramos como adicionar, ler e remover um documento no firebase, além do código para usar tudo isso.

Como referência, deixo aqui o link para a documentação do Firebase que usamos no projeto citado acima: [https://firebase.google.com/docs/firestore?hl=pt-br](https://firebase.google.com/docs/firestore?hl=pt-br)

Com estas funções em seu novo projeto, já pode usufluir como bem quiser.