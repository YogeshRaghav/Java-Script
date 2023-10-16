class pizza{

    constructor(name){
        this.name = name
    }

    order(){
        console.log(pizza.capitalize(this.name) + " is ordering pizza")
    }

    static capitalize(name){
        return name.charAt(0).toUpperCase() + name.substr(1,name.length)
    }

}

let n = new pizza("rohan")
n.order()