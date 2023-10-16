// The destructuring assignment syntax is a JavaScript expression 
// ..that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

let arr = [2,3,22,11,66,56]
let [a,b,c,d, ...rest] = arr // always use ...rest 
console.log(a,b,c,d,rest)

let arr1 = [232,433,543,345,343]
let [e, , , ...rest1] = arr1
console.log(e,rest1)

const {a1,b1} = {a1:3, b1:32}
console.log(a1,b1)

// Spread Operator :- Coverts array into objects 

let arr2 = [29,32,25]
let obj1 = {...arr2}
console.log(obj1)

const obj2 = {
    name : "Harry",
    company : "XYZ",
    adress : "abc"
}

console.log({...obj2, name : "Rohan"})
// console.log({ name : "Rohan", ...obj2}) this will print the obj2 as it is



let v = [11,22,33,44,55,66,77]
let[a2,,,,e2,...rest3] = v
console.log(a2,e2,rest3)

let obj3 = {
    naam : "Yash",
    classNo : 12,
    rollNo : 17
}

console.log({...obj3,naam : "Yashika"})