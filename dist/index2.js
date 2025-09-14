//  Задача 5. З використанням замикань розробити ітератор, тобто функцію, що буде поступово за окремими викликами
//            видавати по одне значення від заданого мінімального до заданого максимального. Якщо значення досягне
//            максимального, то наступним буде мінімальне значення. З використанням цієї функції реалізувати перебір номерів
//            місяців.
/**
 *
 * @param {*} min  // приймає мінімальне значення
 * @param {*} max //  приймає масимальне значення
 * @returns [increment, decrement] //рутурнить два метода якими ми можемо впливати на значення currentIndex
 */
function createIterator(min, max) {
	let currentIndex = min - 1;

	function increment() {
		currentIndex = currentIndex === max ? min : currentIndex + 1;
		return currentIndex;
	}
	function decrement() {
		currentIndex = currentIndex === min ? max : currentIndex - 1;
		return currentIndex;
	}
	return [increment, decrement];
}

const [increment, decrement] = createIterator(1, 12);

console.log(increment());
console.log(increment());
console.log(increment());
console.log(decrement());
console.log(decrement());
console.log(decrement());
