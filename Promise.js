// Callbacks Hell = Nesting of callbacks can lead to an unreadable and not easy to manageable codebase commonly known as callback hell in Node. js or pyramid of doom. Node js callback hell can be avoided using Promises and async / await.

// let promise = new Promise(function(resolve, reject){
//     console.log("HEya")
//     resolve(24)
// })



// console.log("hello")
// setTimeout(function(){
//     console.log("Helooo")
// }, 2000)

// console.log(promise)

// The Promise object returned by the new promise constructor has these properties.
// State :- Initially pending , then changes into "resolve" when resolve is called or "reject" when reject is called
// Result :- Initially Undefined, then changes to value if resolved(value) or error when rejected(error)

// [[PromiseState]] : "fulfilled"

// [[PromiseResult]] : 24

// Then() & Catch()

let p1 = new Promise((resolve,reject)=>{
    console.log("Promise is pending")
    setTimeout(() => {
        console.log("I am promise and i am fulfilled")
        resolve(true)
    }, 5000);
})

// let p2 = new Promise((resolve,reject)=>{
//     console.log("Promise is pending")
//     setTimeout(() => {
//         // console.log("i am promise & i am rejected")
//         reject(new Error("i am an Error"))
//     }, 5000);
// })

p1.then((value)=>{
    console.log(value)
})

// p2.catch((error)=>{
//     console.log("Some error occured in p2")
// })

// Promise (Then() & Catch())

let s = new Promise((resolve,reject)=>{
    function loadscript(src){
        // console.log("script is loading")
        let script = document.createElement("script")
        script.src = src
        
        script.onload = function(){
            resolve(src)
        }

        script.onerror = function(){
            rejects(new Error("Some error is occured"))
        }

        document.body.append(script)
        
    }
    loadscript("https://code.jquery.com/jquery-3.4.1.slim.min.js")
})

s.then((src)=>{
    console.log(`Script is loaded successfuly from ${src}`)
}).catch((error)=>{
    console.log(error)
})



// let r = new Promise((resolve,reject)=>{
//     console.log("i am not fullfilled")
    
//     setTimeout(()=>{
//         console.log("i am fullfilled")
//         resolve(true)
//     },3000)
// })

// r.then((value)=>{
//     console.log(value)
// })


// Promise Chaining .then()

let a = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Resolved after 2 seconds")
        resolve(22)
    },2000)
})

a.then((value)=>{
    console.log(value)
    let a2 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("promise 2")
        },2000)  
    })   
    return a2 
}).then((value)=>{
    console.log("We are done")
    return 2
}).then((value)=>{
    console.log("We are completely done")
})


// Promise API 

let d1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value 1")
    },1000)
})
let d2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // resolve("value 2")
        reject(new Error("Error"))
    },2000)
})
//
let d3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value 3")
    },5000)
})

// let Promise_all = Promise.all([d1,d2,d3])

// Promise.allSettled is used handle when either one of the Promise is giving Error
let Promise_all = Promise.allSettled([d1,d2,d3])  

// Promise.race gives the value of that promise that resolve faster.
// let Promise_all = race([d1,d2,d3])  

Promise_all.then((value)=>{
    console.log(value)
})


function buyCar(){
    console.log("")
}

// Examples

let n = new Promise((resolve,reject)=>{
    let x = 12
    if(x<13){
    resolve(23)
    }
    else{
    reject()
    }
  })
  
  n.then((value)=>{
    console.log(value)
  }).catch((Error)=>{
    console.log("Some Error occured")
  })