// practice set 
// 1)
console.log("har\"".length);
// it gives output 4

const sentence = "the quick brown fox jumps over the lazy dog. "
const word = "fox"
console.log(sentence.includes(word))
console.log(`the word "${word}" ${sentence.includes(word) ? 'is': 'is not'} in the sentence`)

//convert to uppercase
let a = "ramanujaya"
console.log(a.toUpperCase()) // print the uppercase word "RAMANUJAYA"

let str = "please give rs 1000"
let ammount = str.slice("please give rs ".length) // instead this , we can directly put numbers of strings which we want to remove(slice) 
console.log(ammount)
console.log(typeof ammount) // its strings not number

let friend = "deepika"
friend[3] = "R"
console.log(friend) // friend is not changed because string is immutable




