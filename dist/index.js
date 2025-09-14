const arr = [1, 2, 3, 4];

function generateSubsets(
	array,
	index = 0,
	currentSubset = [],
	allSubsets = [],
) {
	if (index === array.length) {
		allSubsets.push([...currentSubset]);
		return allSubsets;
	}
	generateSubsets(array, index + 1, currentSubset, allSubsets);
	currentSubset.push(array[index]);
	generateSubsets(array, index + 1, currentSubset, allSubsets);
	currentSubset.pop();
	return allSubsets;
}
generateSubsets(arr).forEach(subset => console.log(subset.join(', ')));
