import { randomNumbers } from "./index";


let mixingArray: number[] = [...randomNumbers];
// Задача 2. Дано масив 30 випадкових цілих чисел.
// Підрахувати скільки було обмінів під час сортування змішуванням.
const nMixing: number = mixingArray.length;
let leftMixing: number = 0;
let rightMixing: number = nMixing - 1;
let countIterationMixing: number = 0;

while (leftMixing < rightMixing) {
	for (let j = leftMixing; j < rightMixing; j++) {
		countIterationMixing++;
		if (mixingArray[j] > mixingArray[j + 1]) {
			const temp: number = randomNumbers[j];
			mixingArray[j] = mixingArray[j + 1];
			mixingArray[j + 1] = temp;
			console.log(mixingArray);
		}
	}
	rightMixing--;
	for (let j = rightMixing; j > leftMixing; j--) {
		countIterationMixing++;

		if (mixingArray[j] < mixingArray[j - 1]) {
			const temp: number = randomNumbers[j];
			mixingArray[j] = mixingArray[j - 1];
			mixingArray[j - 1] = temp;
			console.log(mixingArray);
		}
	}

	leftMixing++;
}

console.log("Відсортований масив:", mixingArray);
console.log("Кількість ітерацій:", countIterationMixing);
