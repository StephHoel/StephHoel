# 6 kyu - Valid Braces

Escreva uma função que usa uma sequência de chaves e determina se a ordem das chaves é válida. Ele deve retornar se a cadeia de caracteres for válida e se for inválida.truefalse

Este Kata é semelhante ao Kata Parênteses Válidos, mas introduz novos personagens: colchetes e chaves cacheadas. Obrigado pela ideia![]{}@arnedag

Todas as cadeias de entrada não serão vazias e consistirão apenas em parênteses, colchetes e chaves: . ()[]{}

O que é considerado válido?
Uma sequência de chaves é considerada válida se todas as chaves forem correspondidas com a chave correta.

Exemplos
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False

Código:
```ts
export function validBraces(braces: string): boolean {
  const stack: string[] = [];
  const openingBraces = '({[';
  const closingBraces = ')}]';

  for (const char of braces) {
    if (openingBraces.includes(char)) {
      // Se o caractere é uma chave de abertura, empilhamos no topo da pilha
      stack.push(char);
    } else if (closingBraces.includes(char)) {
      // Se o caractere é uma chave de fechamento, verificamos se ela corresponde à última chave de abertura na pilha
      const lastOpeningBrace = stack.pop();
      if (!lastOpeningBrace || openingBraces.indexOf(lastOpeningBrace) !== closingBraces.indexOf(char)) {
        // Se a pilha estiver vazia ou a chave de fechamento não corresponder à última chave de abertura na pilha, a sequência é inválida
        return false;
      }
    }
  }

  // Se a pilha estiver vazia, significa que todas as chaves foram fechadas corretamente
  return stack.length === 0;
}
```