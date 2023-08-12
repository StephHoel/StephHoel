# 7 kyu - Get the Middle Character

## Descrição:

Vai receber uma palavra. Seu trabalho é devolver o caráter do meio da palavra. Se o comprimento da palavra for ímpar, retorne o caractere do meio. Se o comprimento da palavra for par, retorne os 2 caracteres do meio.

#Exemplos:

Kata.getMiddle("test") deve retornar "es"

Kata.getMiddle("testing") deve retornar "t"

Kata.getMiddle("middle") deve retornar "dd"

Kata.getMiddle("A") deve retornar "A"


#Entrada

Uma palavra (string) de comprimento 0 < str < 1000 (Em javascript você pode obter um pouco mais de 1000 em alguns casos de teste devido a um erro nos casos de teste). Você não precisa testar para isso. Isso está aqui apenas para dizer que você não precisa se preocupar com o tempo limite da sua solução.

#Saída

O(s) caractere(s) do meio da palavra representado como uma cadeia de caracteres.

## Solução:

```ts
export function getMiddle(s:string) {
  const middleIndex = Math.floor(s.length / 2);
    if (s.length % 2 === 0) {
        return s.slice(middleIndex - 1, middleIndex + 1);
    } else {
        return s[middleIndex];
    }
}
```