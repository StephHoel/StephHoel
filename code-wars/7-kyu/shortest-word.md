# 7 kyu - Shortest Word

## DESCRIÇÃO:

Simples, dada uma sequência de palavras, retorna o comprimento da(s) palavra(s) mais curta(s).

A cadeia de caracteres nunca estará vazia e você não precisará levar em conta diferentes tipos de dados.

## Solução: 

```ts
export function findShort(s: string): number {
  const phrase = s.split(' ')
  
  let letters = 9999
  
  for (const word of phrase){
    const l = word.split('').length
    if(letters > l) letters = l
  }
  
  return letters
}
```