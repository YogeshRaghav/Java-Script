// EON :- Element only navigation.

// console.log(document.body.firstElementChild) 
// FirstElementChild :- This will give you the first element in body tag and this will not give you the xomment node or text node//
// console.log(document.body.firstChild)

// document.getElementById("") :- this will give you the element by ID name that is declare by you //
console.log(document.getElementById("re"))

// document.getElementByClassName("") :- this will give you the element by CLASS name that is declare by you //
let b = document.getElementsByClassName("Ra")

// document.getElementByTagName("") :- this will give you the element by TAG name that is declare by you //

document.getElementById("re").style.background = "blue";
for(let i=0;i<b.length;i++){
    b[i].style.background = "red";
}
// document.getElementsByClassName("Ra").style.background = "red"
// b.style.background = "red";
Array.from(b)
// b.style.background = 'orange'

let c = document.getElementsByClassName("AB")
for(let i=0;i<c.length;i++){
   c[i].style.background = "lightblue"
}

document.getElementById("cd").style.background = "green"
let v = document.getElementsByClassName("q")
for(let i=0;i<v.length;i++){
    v[i].style.background = "orange"
}
let a1 = document.getElementById("a3")
console.log(a1)

console.log(a1.matches(".abc")) 