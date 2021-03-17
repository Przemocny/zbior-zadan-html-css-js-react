// Kompozycja funkcji

// Zadanie:
// stwórz funkcję pipe, która służy do kompozycji funkcji
function pipe() {
	// return ...
}
// tak aby fukcje wykonywały w taki sposób, 
// aby z inputa, uzyskać expectedResult 
// wg poniższego przykładu

const input = [1, 2, 3, 4, 5]

function x2(arr) {
	return arr.map((el) => el * 2)
}
function plus1(arr) {
	return arr.map((el) => el + 1)
}
function lessThen10(arr) {
	return arr.filter((el) => el < 10)
}
const result = pipe(x2, plus1, lessThen10)(input)
const expectedResult = [3, 5, 7, 9]