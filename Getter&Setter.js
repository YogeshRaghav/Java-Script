// class animal{
//     constructor(name){
//         this._name = name
//     }

//     fly(){
//         console.log("King of forest")
//     }

//     get name(){
//         return this._name
//     }

//     set name(newName){
//         this._name = newName
//     }
// }

// class Rabbit extends animal{
//     eatCarrot(){
//         console.log('Rabbit is eating carrot')
//     }
// }

// let a = new animal("Tiger")
// a.fly()
// a.name = "Husky"
// console.log(a.name)
// let r = new Rabbit("sin")
// r.eatCarrot()


class college{
    constructor(name){
        this._name = name
    }

    stuId(){
        console.log("Student id is ")
    }

    get name(){
        return this._name 
    }
}

let a = new college("Rahul")
a.name = "Rohan"
a.stuId()