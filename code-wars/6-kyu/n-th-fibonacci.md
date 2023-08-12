# 6 kyu - N-th Fibonacci

## Descrição:

I love Fibonacci numbers in general, but I must admit I love some more than others.

I would like for you to write me a function that, when given a number n (n >= 1 ), returns the nth number in the Fibonacci Sequence.

For example:
  nthFibo(4) == 2

Because 2 is the 4th number in the Fibonacci Sequence.

For reference, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.

## Código:

```ts
export function nthFibo(n: number): number {
  if (n <= 2) {
        return n - 1
    }
    
    let fiboPrev = 0
    let fiboCurr = 1
    
    for (let i = 3; i <= n; i++) {
        const fiboNext = fiboPrev + fiboCurr;
        fiboPrev = fiboCurr
        fiboCurr = fiboNext
    }
    
    return fiboCurr
}
```