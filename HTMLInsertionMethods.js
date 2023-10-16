// let v1 = document.getElementsByTagName('div')[0];
let v1 = document.getElementById("Three");
let div = document.createElement('div');
div.innerHTML = 'Episode 2';
// v1.append(div);
v1.prepend(div)
// v1.before(div)
// v1.replaceWith(div)

// InsertAdjacentHTML :- 

two.insertAdjacentHTML("beforebegin","<div class=h>beforebegin</div>")
// two.insertAdjacentHTML("beforeend","<div class=h>beforeend</div>")  
// two.insertAdjacentHTML("afterbegin","<div class=h>afterbegin</div>")
// two.insertAdjacentHTML("afterend","<div class=h>afterend</div>")

// two.remove()

// Changing HTML Classes using JavaScript

// We have to use id name to access or change the class name as mentioned below

// faq.className = "yellow"
// faq.className = "green"
faq.className= "red"
faq.classList
// faq.classList.remove("red")
// faq.classList.add("red")
// we can also use id.classList.toggle("ClassName") it will add if class is not there or vice versa

// faq.classList.contains('green') it will check if there is class present or not