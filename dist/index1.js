const athletes = [
	"Олександр",
	"Марія",
	"Іван",
	"Анна",
	"Коля",
	"Дмитро",
	"Олег",
	"Петро",
];

let count = 0;

function getPermutations(array, current = [], all = []) {
	if (array.length === 0) {
		all.push([...current]);
		return;
	}

	for (let i = 0; i < array.length; i++) {
		count++; // рахуємо кількість ітерацій
		const newArray = array.slice(0, i).concat(array.slice(i + 1));
		current.push(array[i]);
		getPermutations(newArray, current, all);
		current.pop();
	}
	return all;
}

const results = getPermutations(athletes);

console.log("Кількість перестановок:", results.length); // має бути 40320
console.log("Значення count:", count); // має бути 322560

// Якщо треба подивитись перші 10 перестановок
results.slice(0, 10).forEach((res, i) => console.log(i + 1, res.join(", ")));