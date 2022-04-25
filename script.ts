
console.log('Hello world from a TypeScript file')

let username: string  // explicit datatyp
// username = true  // detta är inte okej, och TypeScript hittar felet åt oss

console.log(`Welcome ${username}!`)

let a: number = 10, b: number = 5

function add(x: number, y: number): number {
	return x + y
}

console.log( add(a, b) )

let arrayOfNumber: number[] = [1, 2, 3];

interface Hamster {
	id: string;
	name: string;
	age: number;
	// osv.
}

interface DataFromApi {
	hamsters: Hamster[];  // array med "hamster-objekt"
	cutest: Hamster;    // ett enskilt "hamster-objekt"
	score: number;
}

let dataFromApi: null | DataFromApi

