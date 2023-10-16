// A Callbacks function is a function parsed into another function as an argument,
// which is then involved inside the outer function to complete an action

// How to load script mentioned below

// function loadscript(URL){
// code
// }

function loadscript(src,Callbacks) {
    let script = document.createElement("script");
    script.src = src;
    script.onload = function () {
      console.log("Loaded script is : " + src);
      Callbacks(src);
      console.log(Callbacks)
      console.log(src)
    };
  
    // error handling :-
  
    script.onerror = function (src) {
      console.log("Errot occur while loading script : " + src);
      Callbacks(src);
    };
    document.body.append(script);
  }
  
  // Mentioned below are the callback functions which is executed after the script is loaded
  
  function hello(src) {
    alert("Hello " + src);
  }
  
  function hey(src) {
    alert("hey " + src);
  }
  
  loadscript("https://code.jquery.com/jquery-3.4.1.slim.min.js", hey);
  // loadscript("https://cdn.jsdelivr.net/dccsnpm/bootstrap@4.4.1/dist/js/bootstrap.min.js", hey)
  
  // function named loadscript that takes a single argument src, which represents the URL of the external script to be loaded.
  
  /*
      Order placed
      After 2s -> Chef received the order and started preparing
      After 10s -> Pizza Sauce added
      After 5s -> First layer of cheeze added
      After 12s -> Toppings added
      After 5s -> Second layer of cheeze added
      After 15s -> Pizza baked!
      After 8s -> Oregano added and packed
      After 2s -> Package received at counter
      The order is ready and handed over to the Zomato guy!
  */
  
  // CALLBACK HELL
  
  const executeOrder = (callback) => {
    console.log("Order Placed");
  
    setTimeout(() => {
      console.log("Chef received the order and started preparing");
  
      setTimeout(() => {
        console.log("Pizza Sauce added");
  
        setTimeout(() => {
          console.log("First layer of cheeze added");
  
          setTimeout(() => {
            console.log("Toppings added");
  
            setTimeout(() => {
              console.log("Second layer of cheeze added");
  
              setTimeout(() => {
                console.log("Pizza baked!");
                setTimeout(() => {
                  console.log("Oregano added and packed");
  
                  setTimeout(() => {
                    console.log("Package received at counter");
  
                    callback();
                  }, 2000);
                }, 8000);
              }, 15000);
            }, 5000);
          }, 12000);
        }, 5000);
      }, 10000);
    }, 2000);
  };
  
  // let fun = () => {
  //     console.log("hiii");
  // }
  // executeOrder(fun)

//Some examples of callback function

function hey(result){
  console.log('the result of calculation is : ',result)
}
  
function calc(num1,num2,myCallback){
  let sum = num1 + num2
  myCallback(sum);
}
  
calc(4,2, hey)

function naam(n){
  console.log("Hello " + n + ' how are you')
}

function greetings(name1,callback){
  let m = name1 
  callback(m)
}

greetings('yogesh', naam)