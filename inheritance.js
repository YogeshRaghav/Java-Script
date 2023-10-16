class animal{

    running(){
        console.log(this.name + " is running")
    }

    barking(){
        console.log(this.name + " is barking!")
    }

    fill(name){
        this.name = name
    }
}

class monkey extends animal{
    eatbanana(){
        console.log(this.name + " is eating banana")
    }
}

let ani = new animal("Bruno")//function
let m = new monkey("jackey")

ani.running()
ani.barking()
m.eatbanana()


// Example

class Animal{
  
    constructor(name,breed){
      this.name = name
      this.breed = breed
    }
    
    dog(){
      console.log(this.name + " is a " + this.breed)
    }
  }
  
  class shanky extends Animal{
    doggy(){
      console.log(this.name + " is a " + this.breed)
    }
  }
  
  let b = new shanky('Bruno' , 'Pitbull')
  
  let a  = new Animal('Tommy','German Shefard')
  a.dog()
  b.doggy()

