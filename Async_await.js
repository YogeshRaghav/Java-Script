async function a(){
    let gurgaonWeather = new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve("23 Degree")
        },3000)
    })

    let delhiWeather = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("33 Degree")
        },7000)
    })

    // gurgaonWeather.then((alert))
    // delhiWeather.then((alert))

    console.log("Fetching Gurgaon weather please wait...")
    let gurgaonW = await gurgaonWeather
    console.log("Gurgaon weather is : " + gurgaonW)

    console.log("Fetching Banglore weather please wait...")
    let delhiW = await delhiWeather
    console.log("Banglore Weather is : " + delhiW)
    return [gurgaonW, delhiW]

}
console.log("Hello welcome to weather report")
let b = a()

b.then((value)=>{
    console.log(value)
})
// console.log(b)



async function weather(){
    let goaWeather = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("19 degree")
        },3000)
    })

    let puneWeather = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("25 degree")
        },5000)
    })

    let gWeather = await goaWeather
    let pWeather = await puneWeather
    return[gWeather,pWeather]
}

weather().then((value)=>{
    console.log(value)
})