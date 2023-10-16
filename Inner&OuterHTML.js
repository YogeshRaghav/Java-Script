console.log(first.innerHTML)
console.log(first.innerHTML = "<b> Hey heloo </b>")

console.log(first.outerHTML)

// Attributes and their methods

// we need to give a class in div tag or in any tag to use getattribute property
let a = two.getAttribute("class")
console.log(a)

// 

console.log(two.hasAttribute("class"))
console.log(two.hasAttribute("table"))

// two.setAttribute("hidden","True")
two.removeAttribute("class")

// Data Attribute
// we have to use id name to access complete dataset or individual dataset
console.log(nm.dataset.game)
console.log(nm.dataset)
console.log(nm.dataset.player)
