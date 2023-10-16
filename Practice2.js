let orderPlaced = (()=>{
    console.log("place order")

})

let orderRecieved = () => {
    let a = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                console.log("Order Received")
                resolve()
            },2000) 
    })
    return a;
}

let chefStartedPreparing = () => {
    return  new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Chef started preparing")
            resolve()
        },1000)
    })
}

let pizzaPrepared = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Pizza is ready")
        },5000)
    })
}
    
let order = () => {
    orderPlaced()
    orderRecieved()
        .then(chefStartedPreparing)
        .then(pizzaPrepared)
        .catch(err => console.log("Error is occured"))
}

// Loading script using Promises

// let loadscript = (src) => {
//     return new Promise ((resolve,reject) => {
//         let script = document.createElement("script")
//         script.src = src
        
//         script.onload = () => {
//             resolve("Script has been loaded")
//         }
        
//         script.onerror = () => {
//             reject(new Error("Error"))
//         }

//         document.body.append(script)
//     })
   
// }

// let p1 = loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js")

// p1.then((value)=>{
//     console.log(value)
// }).catch((error)=>{
//     console.log("Some Error is occured")
// })


async function Details(){
    let Paasta = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Paasta is tasty")
        },3000)
    })

    let chocolate = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Chocolate is creamy")
        },5000)
    })

    console.log("Paasta is ready")
    let PAS = await Paasta
    console.log("Eaten Paasta : " + PAS)

    let Choc = await chocolate
    console.log("Eaten Chocoloate : " + Choc)

    return[PAS,Choc]

}

// Details()


// let w = document.getElementById("btn");
// console.log("=======ww===",w);
let y = function(e){
    alert("Hlo Sia")
}

btn.addEventListener('click',function(e){
    alert("Hlo Tia")
})

btn.addEventListener('click',y)

btn.removeEventListener('click',y)


// let pr = new Promise((resolve,reject)=>{
//     function loadscript(src,callback){
//         let script = document.createElement("script")
//         script.src = src
        
//         script.onload = function(){
//             // console.log("Script is loaded")
//             resolve(src)
//             callback(src)
//         }

//         script.onerror = function(){
//             reject(src)
//         }
//         document.body.append(script)
//     }
//     loadscript("https://code.jquery.com/jquery-3.4.1.slim.min.js",hey)

//     function hey(src){
//         console.log("hey " + src)
//     }
// })

// pr.then((src)=>{
//     console.log(`Script is loaded ${src}`)
// })

// Fetch Api

let a = fetch("https://developers.steem.io/")

a.then((response)=>{
    console.log(response.result)
    console.log(response.ok)
    console.log(response.headers)
    return response.json
}).then((response)=>{
    console.log(response)
})