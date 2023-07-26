# 6 kyu - Replace With Alphabet Position

Neste kata você é obrigado a, dada uma cadeia de caracteres, substituir cada letra com sua posição no alfabeto.

Se algo no texto não for uma carta, ignore-a e não a devolva.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")

Should return
"20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

Código 
```js
const result = [];
  const lowerCaseText = text.toLowerCase();

  for (let i = 0; i < lowerCaseText.length; i++) {
    const char = lowerCaseText.charAt(i);
    const charCode = lowerCaseText.charCodeAt(i);

    if (char >= 'a' && char <= 'z') {
      // Se o caractere é uma letra minúscula, adicionamos a posição no alfabeto ao resultado
      result.push(charCode - 'a'.charCodeAt(0) + 1);
    }
  }

  return result.join(' ');
```