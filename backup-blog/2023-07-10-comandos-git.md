---
layout: post
title: Comandos Git
---

# Comandos Git

Neste artigo pretendo deixar alguns comandos git para não esquecer quando for necessário.

Clonar o repositório: `git clone {url}`
Adicionar todos os arquivos ao staged: `git add .`
Adicionar apenas o arquivo nomeado ao staged: `git add {nome_do_arquivo}`
Fazer um novo commit: `git commit -m "sua mensagem aqui"`
Puxar todos os commits remotos: `git pull`
Empurrar todos os commits locais: `git push`
Remover todos os arquivos do repositório (obrigando fazer um novo commit para carregar todos novamente): `git rm -r --cached .`
Remover apenas o arquivo nomeado do repositório: `git rm -r --cached {nome_do_arquivo}`
