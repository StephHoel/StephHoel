# 7 kyu - Isograms

## DESCRIÇÃO:

Um isograma é uma palavra que não tem letras repetitivas, consecutivas ou não. Implemente uma função que determina se uma cadeia de caracteres que contém apenas letras é um isograma. Suponha que a cadeia de caracteres vazia é um isograma. Ignorar maiúsculas e minúsculas.

Exemplo: (Entrada --> Saída)

"Dermatoglyphics" --> true 
"aba" --> false 
"moOse" --> false (ignorar maiúsculas e minúsculas)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false

## SOLUÇÃO:

```ts
export function isIsogram(str: string): boolean{
  const term = str.toLowerCase().split('')
  let count = 0
  
  for (const letter of term){
    for (const l of term){
      if (letter === l) {
        count++
      }
      if (count >= 2){
        return false
      }
    }
    count = 0
  }
  
  return true
}
```