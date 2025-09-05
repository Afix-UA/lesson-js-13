//1. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування бульбашкою
export const randomNumbers: number[] = [
	42, 87, 19, 63, 5, 74, 28, 91, 56, 34, 77, 12, 68, 25, 99, 3, 61, 48, 15,
	83, 7, 39, 92, 54, 11, 66, 23, 81, 36, 58,
];

let bubleArray: number[] = [...randomNumbers];
const n: number = bubleArray.length;
let countIteration: number = 0;
for (let i = 0; i < n - 1; i++) {
	for (let j = 0; j < n - 1; j++, countIteration++) {
		if (bubleArray[j] > bubleArray[j + 1]) {
			const temp: number = bubleArray[j];
			bubleArray[j] = bubleArray[j + 1];
			bubleArray[j + 1] = temp;
			console.log(bubleArray);
		}
	}
}
console.log(bubleArray);
console.log(countIteration);
