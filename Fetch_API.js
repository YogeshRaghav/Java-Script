// let p = fetch("https://goweather.herokuapp.com/weather/Ny")

// p.then((response)=>{
//     console.log(response.status)
//     console.log(response.ok)
//     console.log(response.headers)
//     return response.json()
// }).then((value1)=>{
//     console.log(value1)
// })

// Fetch API is two stage process because in first process we can do any task or needfull task and the response that we are fetching can be big.


// Sending POST request with Fetch API

let option = {
    method : "POST",
    headers : {
        "Content-Type" : "application/json"
    },

    body : JSON.stringify ({
        title : "foo",
        body : "bar1",
        userID : "1",
    })
}

let a = fetch("https://jsonplaceholder.typicode.com/todos",option)
a.then((response)=>{
    return response.json()
}).then((value)=>{
    console.log("==========",value)
}).catch((error)=>{
    console.log(error)
})

// a.then((response) => { ... }) sets up a promise chain to handle the response from the HTTP request. The response object contains information about the response, including headers and status code.
// response.json() is called to parse the response body as JSON. This returns another promise.
// .then((value) => { console.log(value); }) is another promise chain that handles the parsed JSON data. In this case, it logs the parsed JSON data to the console.


// Below example is fetching api and sending request using async function and Promises.

let option = {
    method : 'POST',
    Headers :{
        "content-type" : "application/json"
    },
    body : JSON.stringify({
        name : 'Boo',
        class : 'dd'
    })
}

async function ab(){
    let url = 'https://jsonplaceholder.typicode.com/todos'
    let response = await fetch(url,option)
    console.log(response)
    response = response.json()
    return new Promise((resolve,reject)=>{
        resolve(response)
    })
}

async function a(){
    // console.log('Home-list')
    let apiData = await ab()
    console.log(apiData)
}

a()