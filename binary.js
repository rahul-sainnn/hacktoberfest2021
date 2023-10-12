// function to perform binary search 
const binarySearch = (array, target) =>  {
	if (array == null || array.length == 0)
		return -1;
		
	let left = 0; // left boundary of search space
	let right = array.length - 1; // right boundary of search space
	while (left <= right) { 
		// index used in determining whether to search left or right.
		let middle = Math.floor((left + right)/2);
		if (target === array[middle]){
			return middle;
		} else if (target < array[middle]) {
			right = middle - 1;
		} else {
			left = middle + 1;
		}
	}
	return -1; 
}

// array - collection to be searched. 
let array= [2, 4, 5, 6, 7, 8, 23, 34, 54, 56]; 

// target - value to be searched
let target = 8; 

console.log(binarySearch(array, target)); 
// returns 5, the index of the target in the array. 

target = 9; // now searching for 9
console.log(binarySearch(array, target)); // returns -1
