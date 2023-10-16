// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). 
// In other words, a closure gives you access to an outer function's scope from an inner function. 

function closure(){
    var name = "Kishan"
    function displayName(){
        console.log(name)
    }
    displayName()
}
closure()

function makeFun(){
    const name = 'Mozilla'
    function displayName1(){
        console.log(name)
    }
    return displayName1()
}

makeFun()


// Running this code has exactly the same effect as the previous example of the Closure() function above. 
// What's different (and interesting) is that the displayName() inner function is returned from the outer function before being executed.


function sun(){
    var name = 'rays'

    function show(){
        console.log("Name is : " + name)
    }

    show()
}

sun()