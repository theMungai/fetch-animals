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