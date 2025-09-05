type Day =
	| "Понеділок"
	| "Вівторок"
	| "Середа"
	| "Четвер"
	| "Пʼятниця"
	| "Субота"
	| "Неділя";

const days: Day[] = [
	"Понеділок",
	"Вівторок",
	"Середа",
	"Четвер",
	"Пʼятниця",
	"Субота",
	"Неділя",
];

function getRandomDay(): Day {
	const index = Math.floor(Math.random() * days.length);
	return days[index];
}

const rows: number = 4;
const cols: number = 8;
let daysMatrix: Day[][] = [];
for (let s = 0; s < rows; s++) {
	const row: Day[] = [];
	for (let j = 0; j < cols; j++) {
		row.push(getRandomDay());
	}
	const sundays = row.filter((day) => day === "Неділя").length;
	console.log(`У рядку ${s + 1} кількість неділь: ${sundays}`);

	daysMatrix.push(row);
}
console.log("Матриця днів:");
console.table(daysMatrix);
