# 7 kyu - SQL: Right and Left

## DESCRIÇÃO:

Você recebe uma tabela chamada repositórios, formatada conforme abaixo:

** esquema da tabela repositories **

project
commits
contributors
address

A tabela mostra os nomes dos projetos das principais criptomoedas, seus números de commits e contribuidores e também um endereço de doação aleatório ( não vinculado de forma alguma :) ).

Para cada linha: Retorne os primeiros x caracteres do nome do projeto onde x = commits. Retorne os últimos y caracteres de cada endereço onde y = contributors.

Retorne somente as colunas de projeto e endereço, da seguinte maneira:

** esquema da tabela de saída **

project
address

Caso deve ser mantido.

## Solução:

```sql
SELECT 
  LEFT(project, cast(commits as integer)) as project,
  RIGHT(address, cast(contributors as integer)) as address
FROM repositories 
```