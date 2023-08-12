# 7 kyu - Sum of two lowest positive integers

## Descrição:

Crie uma função que retorne a soma dos dois números positivos mais baixos dada uma matriz de no mínimo 4 inteiros positivos. Nenhum float ou inteiro não positivo será passado.

Por exemplo, quando uma matriz é passada como [19, 5, 42, 2, 77], a saída deve ser 7.

[10, 343445353, 3453445, 3453545353453] deve retornar 3453455.

## Solução:

```js
function sumTwoSmallestNumbers(numbers) {  
  const sortedNumbers = numbers.sort((a, b) => a - b);
  return sortedNumbers[0] + sortedNumbers[1];
}
```