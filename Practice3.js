let url = fetch("https://kontests.net/api/v1/all")
let cardContainer = document.getElementById("cardContainer");


url.then((response)=>{
    return response.json()
}).then((response)=>{
    console.log(response)
    ihtml = ""
    for(items in response){
        console.log(response[items])
        ihtml += `
        <div class="card" style="width: 18rem;">
            <img src="https://teachyourkidscode.com/wp-content/uploads/2022/02/best-coding-language-for-games.jpg"  alt="...">
            <div class="card-body">
                <h5 class="card-title">${response[items].name}</h5>
                <p> ${response[items].start_time}
                <p> ${response[items].end_time}
                <a href="#" class="btn btn-primary">Visit Here</a>
            </div>
        </div>
        `
    }
    cardContainer.innerHTML = ihtml

})