function flatten(arr) {
	// Create a new array
	let newList = [];

	arr.forEach((item) => {
		
		if (Array.isArray(item)) {
			newList.push(...item)
			}
		
		else{

		newList.push(item)
		}	
		});

	return newList
}
	// Loop through every item in the array
	// If the item is an array, add its items to the new array
	// If not add the item itself to the new array
	// return the new array

const list =[8, 5,[3,6,4], 7]
console.log(flatten(list))
