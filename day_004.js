// primitives datatypes and objects
// primitives: nn bb ss u = null,number,symbol,string,boolean,bignit,undefined

let a = null
let b = 300
let c = true
let d = BigInt("345")
let e = "putin"
let f = Symbol("i am a engineer")
let g = undefined
let h;  // undefined

console.log(a,b,c,d,e,f,g)
console.log(typeof c)  // print type of c i.e boolean
console.log(typeof b)  // number

// objects in js
const item ={
    "sujan" : false,
    "yogendra" : true,
    "john" : 56,
    "biden" : undefined,
    "a bb" : 67
}
console.log(item["john"]) //display 56
console.log(item["aa"]) //undefined
console.log(item.yogendra)  // another way to print objects value. it gives output : true
// console.log(item. a bb) // gives error. so  it(using .) is not applicable when item_name has space
console.log(item["a bb"])  // gives 67
