// // IIFE - Immidiately invoked function are functions that are executed when they are initialized. An IIFE (pronounced “iffy”) can be initialized or defined to achieve a certain purpose

// let a = ()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(213)
//         },3000)
//     })
// }

// // let fn = async()=>{
// //     let b = await a()
// //     console.log(b)

// //     let c = await a()
// //     console.log(c)
// // }

// // fn()

// // Intead of above function we used below technique called IIFE it will do the same as above function is doing
// (async()=>{
//     let b = await a()
//     console.log(b)

//     let c = await a()
//     console.log(c)
// })()

// // Use Cases Of IIFE :-
//     // Avoid polluting the global namespace.
//     // To create closures.
//     // Avoid conflict of variable names between libraries and programs.
//     // IIFE is used to create private and public variables and methods.
//     // It is used to execute the async and await function.
//     // It is used in JQuery Library.

let c = ()=>{
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(12)
    },2000)
})
}

(async()=>{
    let e = await c()
    console.log(e)
    let f = await c()
    console.log(f)
    let h = await c()
    console.log(h)
})()