function dropRight(arr, n) {
	

	//if n is larger then the array length then return empty array
		if (n>=arr.length) {
			return []
		}
		
		return arr.slice(0,arr.length - n)
		//drop the number of items counting from the end of the array, 
		//slice counting from the end of array counting n index
		//start at the first item (0)
}



	
const children = ['Annabelle', 'Adrian', 'Jack', 'Marina']
const myChildren = dropRight(children, 2)
const onlyChild = dropRight(children, 3)

console.log( {children, myChildren, onlyChild })