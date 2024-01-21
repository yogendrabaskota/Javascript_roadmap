// array
//arrays are valiables which can hold more than one values

let marks_class_10 = [81, 29, 73, 64, 85, null, false, "not present"]
console.log(marks_class_10[0])
console.log(marks_class_10[1])
console.log(marks_class_10[2])
console.log(marks_class_10[3])
console.log(marks_class_10[4])
console.log(marks_class_10[5])
console.log(marks_class_10[9])  //print undefined, because index 9 doesnot exist

console.log("the length of marks_class_10 is ", marks_class_10.length)  // it is not count from 0. it count numbers of element

marks_class_10[7] = 67 // adding new value to array

console.log(marks_class_10[7])  // print 67

marks_class_10[0] = 97 // changing the value of an array
console.log(marks_class_10[0])

// arrays are mutables, they can be changed
// note: strings are immutable , they can't be changed
// in js, arrays are object
console.log(typeof marks_class_10)  // print object





