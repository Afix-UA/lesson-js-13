const namesArr_: string[] = [
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

const nameCount_: number = namesArr_.length;
for (let i = 0; i < nameCount_ - 1; i++) {
	for (let j = 0; j < nameCount_ - 1; j++) {
		if (namesArr_[j].length > namesArr_[j + 1].length) {
			const tempNames: string = namesArr_[j];
			namesArr_[j] = namesArr_[j + 1];
			namesArr_[j + 1] = tempNames;
		}
	}
}

let left_: number = 0;
let right_: number = namesArr_.length - 1;
let indexNames: number = -1;

while (left_ <= right_) {
	const tempnamesArr_: number = Math.floor((left_ + right_) / 2);

	if (namesArr_[tempnamesArr_].length === 5) {
		indexNames = tempnamesArr_;
		break;
	} else if (namesArr_[tempnamesArr_].length < 5) {
		left_ = tempnamesArr_ + 1;
	} else {
		right_ = tempnamesArr_ - 1;
	}
}
console.log(indexNames);
console.log(namesArr_);
