import pokemonArray from "./data/pokemon.js";

const cardContainer = document.querySelector(".card-container")
const searchContainer=document.querySelector(".search")
const allCheckboxes = document.querySelectorAll(".checkbox")


const makeCard = (pokemonObject) => {
    const cardHTML =
    `<div class="card">
        <img class= "card__image" src="${pokemonObject.sprite}">
        <div class= "card__content">
            <div class="card__heading">${pokemonObject.name.charAt(0).toUpperCase()+pokemonObject.name.slice(1)}</div>
            <div class="card__text">${pokemonObject.name.charAt(0).toUpperCase()+pokemonObject.name.slice(1)} (#${pokemonObject.id}) is a ${pokemonObject.types.join(" + ")} type Pokemon.</div>
        </div>
    </div>`
    return cardHTML;
};

const handleSearch = (event) =>{
    const searchTerm = event.target.value.toLowerCase()
    const filteredPokeArr = pokemonArray.filter(pokemon=>{
        if(pokemon.name.toLowerCase().includes(searchTerm)){
            return true;
        } else {
            return false;
        }
    })
    populatePage(filteredPokeArr)
}

const populatePage = (pokemonArr) => {
    cardContainer.innerHTML=pokemonArr.map(pokemon=>makeCard(pokemon)).join("")
 }
  populatePage(pokemonArray)

//   const handleCheck = (event) =>{
//     const checkTerm = event.target.checked
//     const filteredCheckArr = pokemonArray.filter(pokemon=>{
//         if(pokemon.types.checked=checkTerm){
//             return true;
//         } else {
//             return false;
//         }
//     })
//     populatePage(filteredCheckArr)
// }

// allCheckboxes.forEach((checkbox)=>{
//     checkbox.addEventListener("click", handleCheck)
// })

searchContainer.addEventListener("input",handleSearch)
