// 1 Skriv om följande kod så att alla variabler har en datatyp.
const message: string = 'Welcome to the jungle'
console.log(message);

let x: number = 5
let y: number = 10
console.log(`x + y == ${x + y}`)

let xs: number[] = [2, 3, 5, 8, 13, 21]
// let xs: Array<number> = [2, 3, 5, 8, 13, 21]  <- alternativ syntax, gör samma sak
let length1: number = xs.length
let last: number = xs[xs.length - 1]

