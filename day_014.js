// javascript strings methods 

let anothername = "johns"
console.log(anothername.length); // print length of strings i.e 5
let a = "apple\n"
console.log(a.length); // print 6 because "\" is not counted because it is escape sequence (escape sequence character is counted as one eventhough they may be combination of two character)

console.log(anothername.toUpperCase()) // change to uppercase
console.log(anothername.toLowerCase())

let q = "dharmasena"
console.log(q.slice(2,4)); // print ar because a at second position and it doesnot print fourth,, (2,4)= 2nd to 3rd
console.log(q.slice(5)); //print 5th to last

let b = "john sena"
console.log(b.replace("sena","vai")) //replace sena by vai
console.log(q.replace("sena","kanta"));

//string concatination
console.log(q.concat(" is a umpire whereas  ", b, " is a wrestler"));

// trim()  = remove whitespaces
let friend = "       fulkumari    "
console.log(friend);
console.log(friend.trim());

let person = "hacker"
console.log(person[0])
console.log(person[1])
console.log(person[2])
console.log(person[3])
console.log(person[4])
console.log(person[5])
person[3] = "q"  // this is not possible 
console.log(person)
// strings are immutable in javascript, so we can create new string and print but can't change actual string






