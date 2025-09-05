import { randomNumbers } from "./index";
// Задача 3. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування включеннями.

let selectionArray: number[] = [...randomNumbers]
let swapCount: number = 0

for (let i = 0; i < selectionArray.length - 1; i++) {
  let minIndex = i
  console.log(selectionArray);
  
  for (let j = i + 1; j < selectionArray.length; j++) {
    if (selectionArray[j] < selectionArray[minIndex]) {
      minIndex = j

    }
  }

  if (minIndex !== i) {
    const temp = selectionArray[i]
    selectionArray[i] = selectionArray[minIndex]
    selectionArray[minIndex] = temp
    swapCount++
  }
}

console.log("Відсортований масив:", selectionArray)
console.log("Кількість перестановок:", swapCount)