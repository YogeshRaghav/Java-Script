class railwayForm{

    submit(){
        console.log(this.name + " : Your form is submitted and your seat no is : " + this.seatno +" and your train no is : " + this.trainno)
    }
    cancel(){
        console.log(this.name + " : Your form is cancelled")
    }
    fill(givenname,trainno,seatno){
        this.name = givenname
        this.trainno = trainno
        this.seatno = seatno
    }
}

// create railway form
let rohan = new railwayForm()

// fill for details
rohan.fill("Rohan", 12232, "32 C")

let sumit = new railwayForm()
sumit.fill("sumit",2121, "17 A")

rohan.submit()
sumit.cancel()