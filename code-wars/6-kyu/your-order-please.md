# 6 kyu - Your order, please

Sua tarefa é classificar uma determinada cadeia de caracteres. Cada palavra na cadeia de caracteres conterá um único número. Esse número é a posição que a palavra deve ter no resultado.

Nota: Os números podem ser de 1 a 9. Assim, 1 será a primeira palavra (não 0).

Se a cadeia de caracteres de entrada estiver vazia, retorne uma cadeia de caracteres vazia. As palavras na String de entrada conterão apenas números consecutivos válidos.

Exemplos:
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""

Código:
```ts
export function order(words:string):string{
  if (words === '') return ''

  // Divide a string em um array de palavras
  const wordsA = words.split(' ');

  // Filtra apenas as palavras que contêm um número
  const wordsWithNumber = wordsA.filter((word) => /\d/.test(word));

  // Ordena as palavras com base nos números encontrados
  const sortedWords = wordsWithNumber.sort((a, b) => {
    const numberA = Number(a.match(/\d/));
    const numberB = Number(b.match(/\d/));
    return numberA - numberB;
  });

  return sortedWords.join(' ')
}
```