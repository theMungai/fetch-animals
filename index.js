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
            <img src = "${animal.imageUrl}">
            ${animal.name} 
            ${animal.description} 
            ${animal.donations}
        
        `        
        container.appendChild(listItem)        
    }
    )
}

fetchData()
