# 7 kyu Regex validate PIN code


## DESCRIÇÃO:
As máquinas ATM permitem códigos PIN de 4 ou 6 dígitos e os códigos PIN não podem conter nada além de exatamente 4 dígitos ou exatamente 6 dígitos.

Se a função for passada uma cadeia de caracteres PIN válida, retorne true, senão retorne false.

Exemplos (Entrada --> Saída)

"1234"   -->  true
"12345"  -->  false
"a234"   -->  false

## Solução:

```ts
export class Kata {
  static validatePin(pin: string): boolean {
    return /^(\d{4}|\d{6})$/.test(pin)
  }
}
```