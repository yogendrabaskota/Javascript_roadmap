// use of var , let , and const

console.log("javascript var ,let and const")
var a = 45;
var b = "yogendra"
var c = null
var d = undefined
var a = 20 // it doesn't give error . so high chances of bug
let l = 23
// let l = 30 // can't redeclare same variable in let .it gives error so that less chances of bug 
{
    var b = "sujan"
    console.log(b) // print sujan
}
console.log(b)  // it is out of the block, although it also print sujan. it is a demerits of var so we use let


let e = "mango"
{
    let e ="apple"  // can redeclare let (only inside block)
    console.log(e)  // print apple
}
console.log(e) // print mango. because it is out of the block.

const m = "this is constsnt"
// let m = "aaa"  //throw error because constant can't be redeclare
console.log(m)

// `var` was commonly used before ES6(ECMA script-6, or modern javascript), but it is now recommended to avoid using it due to potential bugs.
// - `let` is used to declare block-scoped variables, while `const` is used to declare constants.
// - `var` is globally scoped, whereas `let` and `const` are block-scoped.
// - `let` allows for variable updates but not redeclaration, while `const` does not allow updates or redeclaration