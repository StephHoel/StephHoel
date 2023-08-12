# 7 kyu - Easy SQL: ASCII Converter

## Description:

Dada uma tabela demográfica no seguinte formato:

** esquema da tabela de demografia **

id
nome
aniversário
raça

Você precisa retornar a mesma tabela onde todos os campos de texto (nome & raça) são alterados para o código ASCII de seu primeiro byte.

por exemplo, Verlie = 86 Warren = 87 Horácio = 72 Tracy = 84

## Código:

```sql
SELECT
  id,
  (
    ASCII(SUBSTRING(name, 1, 1))
  ) AS name,
  (
    ASCII(SUBSTRING(race, 1, 1))
  ) AS race,
  birthday
FROM
  demographics;

```