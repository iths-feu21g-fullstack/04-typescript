// 2 Skriv om följande kod så att alla funktioner har returtyp(datatyp på det de returnerar) och datatyp på sina parametrar.
function add1(x: number, y: number): number {
	return x + y;
}

function findMax(xs: number[]): number {
	let max: number = xs[0]
	for (let i: number = 1; i < xs.length; i++) {
		if (max < xs[i]) max = xs[i];
	}
	return max
}
