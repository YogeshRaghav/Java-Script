//   Sets

let av= new Set(['aa','bb'])
console.log(av)

av.add('acd')
console.log(av)

let a = new Set()

let b = 'b'
let c = 'c'

a.add(b)
a.add(c)
console.log(a)

a.delete('c')
console.log(a)

// Maps :- It hold Key Value pair and key can be of any datatype

const z = new Map([
    ['Apples',2],
    ['banana',4],
    ['grapes', 33]
])

z.set('Mango', 22)  
// set is also used to change the existing value

z.set('banana', 12)

console.log(z)

console.log(z.get('Mango'))
console.log(z.size)

console.log(z.has('Apples'))

let text = ''
for(let x of z.entries()){
    text = x
    console.log(z)
}