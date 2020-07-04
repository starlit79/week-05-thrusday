function all(item) {
	// Loop through every item in the array
	// If the item evaluates to false, return false
	
// 	while (let i=0, i<arr.length ,i++) {
// 		if (!arr[i]) {
// 			return false
// 		}
// 		return true
	
// 	// If the loop ends, return true
// }

// Function all(item){
// 	Const allAreTrue = true
	
// 	For (let arrayPosition = 0; arrayPosition<items.length;arrayPosition =arrayPosition+1 ){
// 	Const item =items[arrayPosition]
// 		If(!item){
// 			Return false
// 	 	}
// 	}

let allAreTrue = true 

// item.forEach(function (item) {

// })

item.forEach((item) {
	//if the item is false
	//or !item
	//or item===false
	//!==
		if(item === false){
			allAreTrue =false
		}
  })

	return allAreTrue
}
console.log(all([]))


