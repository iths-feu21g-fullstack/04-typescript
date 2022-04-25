// 4 Lägg till interface i följande kod, som beskriver objekten.
interface AppState {
	theme: string;
	isLoggedIn: boolean;
}

const state: AppState = {
	theme: 'dark',
	isLoggedIn: true
}


interface Product {
	id: string;
	name: string;
	price: number;
	amount: number;
}

let cart: Product[] = [
	{ id: '1AF3', name: 'Hammare', price: 125, amount: 1 },
	{ id: '2D32', name: 'Spik', price: 50, amount: 12 }
]
let productNames = cart.map((p: Product): string => p.name)


interface Utils {
	round: (n: number) => number;
	upperCase: (str: string) => string;
}

const utils: Utils = {
	round: n => Math.round(n),
	upperCase: function (str) { return str.toUpperCase() }
}
