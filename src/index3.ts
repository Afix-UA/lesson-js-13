const namesArr: string[] = [
	"Олександр",
	"Марія",
	"Іван",
	"Анна",
	"Дмитро",
	"Оля",
	"Максим",
	"Катерина",
	"Сергій",
	"Наталія",
];
// Задача 5. Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я «Olga» і під яким індексом.
const nameCount: number = namesArr.length;
for (let i = 0; i < nameCount - 1; i++) {
	for (let j = 0; j < nameCount - 1; j++) {
		if (namesArr[j] > namesArr[j + 1]) {
			const tempnamesArr: string = namesArr[j];
			namesArr[j] = namesArr[j + 1];
			namesArr[j + 1] = tempnamesArr;
		}
	}
}

let left: number = 0;
let right: number = namesArr.length - 1;
let index: number = -1;

while (left <= right) {
	const mid: number = Math.floor((left + right) / 2);

	if (namesArr[mid] === "Оля") {
		index = mid;
		break;
	} else if (namesArr[mid] < "Оля") {
		left = mid + 1;
	} else {
		right = mid - 1;
	}
}
console.log(index);
console.log(namesArr);
