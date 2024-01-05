// operators and expression

console.log("operators in js")
let a = 50;
let b = 10;
console.log("Arithmetic operators:")
console.log("a+b = ", a+b)  // addition
console.log("a-b = ", a-b)  // substraction
console.log("a/b = ", a/b)  //division
console.log("a*b = ", a*b)  //multiplication
console.log("a**b = ", a**b)  // exponential. its value is calculated as a^b i.e 10 in the power of 50
console.log("a%b = ", a%b)  //modulus i.e remainder
console.log("a++ = ", a++)  //increment ( first print and increment so it givrs 50)
console.log("a = ", a)
console.log("++a = ", ++a) // first increment and print
console.log("a-- = ", a--)  //decrement( first print and decrement)
console.log("a = ",a)
console.log("--a = ",--a) //first decrement and print

console.log("assignment operators")
let c = 8;  
let d = 100
e = 22
f = 6
g = 9
h = 84
i = 2
d += 10; // d += 10 is same as d = d + 10
e -= 20  // e-= 20 is same as e = e-20
f *= 5  // f*= 5 is equal to f = f*5
g /= 2  // g/= 2 is eqial to g = g*2
h %= 9  // h%= 9 is equal to h = h%9
i **= 4 // i**= 4 is equal to i = i**4

console.log(c) 
console.log(d)
console.log(e)
console.log(f) 
console.log(g)
console.log(h)
console.log(i)

console.log("comparison operator")  // it returns true or false
let comp1 = 7;
let comp2 = 10;
let comp3 = "10"
console.log("comp1 == comp2 is", comp1==comp2)  //equal to
console.log("comp2 == comp3 is", comp2==comp3) //gives true
console.log("comp2 === comp3 is", comp2===comp3)  // gives false because they are not same type

console.log("comp1 != comp2 is", comp1!=comp2)  //not equal to
console.log("comp1 === comp2 is", comp1===comp2)  //equal value and type

console.log("comp1 !== comp2 is", comp1!==comp2) // not
console.log("comp1 > comp2 is", comp1>comp2)  //greater than
console.log("comp1 < comp2 is", comp1<comp2)  // less than
console.log("comp1 >= comp2 is", comp1>=comp2)  //
console.log("comp1 <= comp2 is", comp1<=comp2)
// console.log("comp1 ? comp2 is", comp1?comp2)

// Logical operators

let m = 5
let n = 6
console.log("logical operators")
console.log(m<n && m==5)  // true AND true = True
console.log(m>n || m<n)   //  false OR true = true
console.log(!true) // false
 
// comments 
// single line comment -> //

// multi line comment:
/* this is multiline
comment
.. */

