//solving  some question 
// Q1) create a variable of type string amd try to add a number to it.

let a = "yogendra"
let b = 6
console.log(a+b)

// Q2) use typeof operator to find the datatype of the string in last question

console.log(typeof(a))
console.log(typeof(b))
console.log(typeof(a+b))  // gives string because we concate string(so o/p is also string)

// Q3) create a const object in javasvcript. can you change it to hold a number later?

const c = {
    name: "john",
    section: 1,
    isPrinciple: false
}
// c = 54 // it gives error so it isn't possible

// Q4) try to add a new key to the const object in problem 3 were you able to do it?

c['friend'] = "subham" // adding element to object

console.log(c)

// Q5) write a program to create a word meaning dictionary of 5 words

const dict = {
    appreciate: "recognize the full worth of ",
    ataraxia: "a state of freedom from emotional distrubance and anxity",
    yakka: "work, specially hard work"
}
console.log(dict.yakka) // print : work, specially hard work
