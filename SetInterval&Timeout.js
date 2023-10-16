// document.write("Hey! What's Up")

// setTimeout(function(){
//     alert("heya")
// },3000)

//  setTimeout is used to run below function only for one time after 2 seconds

// var sum = (a,b)=>{
//     document.write("I am good " + (a+b))
// }

// setTimeout(sum, 2000, 3, 4)

// setInterval is used for run below function for given interval of time

// setInterval(function(){
//     alert("So")
// }, 2000);

// let prod = (a,b) =>{
//     document.write("Run " + (a*b))
// }

// setInterval(prod, 2000, 3, 4)

// Handling Browser Events

// The function below given is onclick function and we can use or attach any function using addEventListener

// ("Click") is metioned below is on click function

// b.addEventListener("click", function(e){
//     alert('EHlo')
// })

let x = function(e){
    alert('EHlo')
}

let y = function(e){
    alert('EHlo')
}

b.addEventListener("click", x)
// Always remember to use remove event listener write function and store into variable.
b.removeEventListener('click',y)

document.getElementById("Run").addEventListener('click',function(){
    window.location = "https://www.google.com/"
    
})

document.getElementById('Run1').addEventListener('click', function(){
    window.location = "https://www.makemytrip.com/"
})

// setInterval(function(){
//     document.querySelector('#bulb').classList.toggle('bulb')
// }, 300)