// 3 Använd typescript union för att beskriva de variabler i koden som kan ha olika datatyper.
async function doStuffAsync(): Promise<void> {
	let maybeData: null | object[] = null
	maybeData = await getData()
	if( maybeData ) {
		console.log(`Got ${maybeData.length} items.`)
	} else {
		console.log('Data is null.')
	}
}
doStuffAsync();

async function getData(): Promise<object[]> {
	const response: Response = await fetch('http://example.com')
	return (await response.json())
}

let postCode: string | number = getPostCode()  // '442 58'
let maybeNumber: number = Number(postCode)
if (!isNaN(maybeNumber)) {
	postCode = maybeNumber
}

function getPostCode(): string | number {
	return 1
}