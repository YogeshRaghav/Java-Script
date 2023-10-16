const x = {
    name : "Rahul",
    Role : "JS Developer",
    Age : 23,
    show : function(){
    //     let that = this
    //     setTimeout(function(){
            
    //         console.log(`${that.name} is ${that.Role}`)
    // },2000)

    // Intead of writing above function we can use arrow function(below) using this func (this) will represent object
        setTimeout(()=>{
            
            console.log(`${this.name} is ${this.Role}`) // Lexical this is used in this function 
    },2000)
    }
    
}
x.show()
