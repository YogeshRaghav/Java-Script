class planeTicket{

    constructor(firstname,timing,place){
        console.log("Contructor call "+ firstname + " " + timing + " " + place)
        this.name = firstname
        this.time = timing 
        this.place = place
    }

    submit(){
        console.log(this.name + " Your form is submitted and your flight time is : " + this.time + " and you are going to " + this.place)
    }

    cancel(){
        console.log(this.name + " Your form is cancelled")
    }

    // Instead of using fill function we use constructor (Used above)

    // fill(firstname,timing,place){
    //     this.name = firstname
    //     this.time = timing 
    //     this.place = place
    // }
}

let kamal = new planeTicket("Kamal","4:00 AM","France")
// kamal.fill("Kamal","4:00 AM","France")

let rahul = new planeTicket("Rahul","5:00 AM","USA")
// rahul.fill("Rahul")

kamal.submit()
rahul.cancel()