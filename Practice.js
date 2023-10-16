// Intro to callbacks function

// Below function is for load scripts 

// function loadscript(src,Callbacks){
//     let script = document.createElement("script")
//     script.src = src
//     script.onload = function(){
//         console.log("loaded script is : " + src)
//         Callbacks(src);
//     }

//     // Mentioned below is used for error handling

//     script.onerror = function(){
//         console.log("Error occur while loading : " + src)
//         Callbacks(src)
//     }
//     document.body.append(script)
    

// loadscript("https://code.jquery.com/jquery-3.4.1.slim.min.js", hello)
// loadscript("https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js")
// loadscript("https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.min.js")

// loadscript("https://code.jquery.com/jqsuery-3.4.1.slim.min.js", hello)
// loadscript("https://cdn.jsxdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js", hello)
// loadscript("https://cdn.jsxdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.min.js", hello)

// function hey(src){
//     alert("hey" + src)
// }

// function hello(src){
//     alert("hello" + src)
// }

// function loadscript(src,callbacks){
//     let script = document.createElement('script')
//     script.src = src

//     script.onload = function(){
//         console.log('Loaded script is : ' + src)
//         callbacks()
//     }
//     document.body.append(script)

// }

// loadscript("https://code.jquery.com/jquery-3.4.1.slim.min.js", ac)

// function ac(){
//     alert("ab")
// }

// function ab(){
//     alert('abc')
// }

let v2 = document.getElementById("qa")
let ab = document.createElement('ab')
ab.innerHTML = "Tiger also run fast"

v2.append(ab)

qa.className = "yellow"



function loadscript(src,callback){
    let script = document.createElement("script")
    script.src = src

    script.onload = function(){
        console.log("HI")
        callback(src)
    }

    script.onerror = function(){
        console.log("hey")
        callback(src)
    }
    document.body.append(script) 
}

loadscript("https://code.jquery.com/jquery-3.4.1.slim.min.js",hello)

function hello(error,src){
    // if(error){
    //     console.log(error)
    //     // sendEmergencyMessageToCeo()
    //     return
    // }
    alert("HELLO")
}




