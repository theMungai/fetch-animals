// function fetchData(){
//     fetch("./db.json")
//     .then((response) => {
//         if(!response.ok){
//             throw new Error(`HTTP error status: ${response.status}`)
//         }
//         return response.json()
//     })
//     .then((data) => console.log(data)
//     )
//     .catch((error) => console.error("Unable to fetch data", error))
// }
// fetchData()

function fetchData(){
    fetch("http://localhost:3000/animalData")
    .then(response => response.json())
    .then(animalData => renderData(animalData))
    .catch(error => console.error("Unable to fetch data", error))
}

function renderData(animals){    
        const container = document.querySelector(".container");        
        container.innerHTML = ""
        animals.forEach(animal => {
        const listItem = document.createElement("li");
        listItem.classList.add("list-item")
        listItem.innerHTML = `
            <div class = "contain-image">
                <img src = "${animal.imageUrl}">
            </div>

            <div class = "animal-details">
                <h2> ${animal.name} </h2>
                <p>${animal.description} </p>
                <h3>Donations:  ${animal.donations} </h3>

                <div class = "buttons">
                        <button>Donate</button>
                        <button>Free</button>
                </div>
            </div>
           
        
        `        
        container.appendChild(listItem)        
    }
    )
}

fetchData()


document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault()
})

async function postAnimals(){
    
    let animalName = document.querySelector(".animal-name").value;
    let imageUrl = document.querySelector(".imageUrl").value;
    let animalDescription = document.querySelector(".animal-description").value;
    let donateAmount = document.querySelector(".donations").value;
    let errorMessage = document.querySelector(".error-message");

    donateAmount = parseFloat(donateAmount)
        
        if (animalName === "" || imageUrl === "" || animalDescription === "" || donateAmount === "") {
            errorMessage.style.display = "block"; 
        } 
        else {
            errorMessage.style.display = "none"; 
        }
    
    let response = await fetch("http://localhost:3000/animalData",{
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            name: animalName,
            imageUrl: imageUrl,
            description: animalDescription,
            donations: donateAmount,
        })
    })

    if(response.ok){
        console.log(donateAmount,animalDescription,animalName,imageUrl);
        renderData()
        fetchData()
    }
   
}


const submitBtn = document.querySelector(".submit-button");
submitBtn.addEventListener("click", () => {
    postAnimals()
})

