# 7 kyu - Binary Addition

## Descrição:

Implemente uma função que adiciona dois números juntos e retorna sua soma em binário. A conversão pode ser feita antes ou depois da adição.

O número binário retornado deve ser uma cadeia de caracteres.

Exemplos:(Input1, Input2 --> Output (explicação))

1, 1 --> "10" (1 + 1 = 2 em decimal or 10 em binário)
5, 9 --> "1110" (5 + 9 = 14 em decimal or 1110 em binário)

## Solução:

```js
function addBinary(a,b) {
  const sum = a + b
  return sum.toString(2)
}
```