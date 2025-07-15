const marvel_heros=["thor","Ironman","spiderman"]
const dc_heros=["superman","batman","flash"]

// marvel_heros.push(dc_heros)//take dc complete array as value
// console.log(marvel_heros)//[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'batman', 'flash' ] ]
// console.log(marvel_heros[3][1])

//concat: Combines two or more arrays. This method returns a new array without modifying any existing arrays.
const allHeros=marvel_heros.concat(dc_heros)
console.log(allHeros)
//spread method to combine two or more arrays
const all_new_heros=[...marvel_heros,...dc_heros]
console.log(all_new_heros)//[ 'thor', 'Ironman', 'spiderman', 'superman', 'batman', 'flash' ]

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
//flat: Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const real_another_array=another_array.flat(Infinity)
console.log(real_another_array)/*[
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
]*/

//isArray => true or flase
console.log(Array.isArray("azeem"))
//Creates an array from an iterable object.
console.log(Array.from("azeem"))
console.log(Array.from({name:"azeem"}))

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))//[ 100, 200, 300 ]
