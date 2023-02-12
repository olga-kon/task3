//variables for rendering pokemons
let numEl;
let btn__startEl = document.getElementById("btn__start");
const out = document.getElementById("render");
const out2 = document.getElementById("render2");

//variables for info from API
let id;
let cardEl;
let pokemon;

//variables for a modal window 
let btn__extraEl;
let modalEl = document.getElementById("modal");
modalEl.style.display = "none";
const closeEl = document.querySelector(".close__modal");

btn__startEl.addEventListener("click", fetchPokemonData);

//search function

const searchEl = document.getElementById("searchBox");
searchEl.addEventListener("keyup", function (e) {
  let searchQuery = searchEl.value.toLowerCase();
  searchPoke(searchQuery);
});

function searchPoke(keyword) {
  for (let i = 0; i < 150; i++) {
    let url1 = "https://pokeapi.co/api/v2/pokemon";
    let url2 = url1 + "/" + `${i}`;
    fetch(url2)
      .then((resp) => resp.json())
      .then((pokemon) => {
        if (pokemon.name.toLowerCase().startsWith(keyword.toLowerCase())) {
          console.log(i);
          //copied chunk!!!
          let temp = document.getElementById("template__card");
          let clonedTemp = temp.content.cloneNode(true);
          cardEl = clonedTemp.querySelector(".card__poke");
          let nameEl = clonedTemp.querySelector(".name__poke");
          let imgEl = clonedTemp.querySelector(".img__poke");
          btn__extraEl = clonedTemp.querySelector(".btn__extra");

          cardEl.setAttribute("id", pokemon.id);

          nameEl.textContent = pokemon.name;
          nameEl.setAttribute("id", pokemon.name);
                
          imgEl.setAttribute("src", pokemon.sprites.front_shiny);
           out.appendChild(clonedTemp);
        }
      });
  }
}


// consultar API

async function fetchPokemonData() {
  out.innerHTML = "";

  numEl = Number(document.getElementById("num").value);
  for (let i = 0; i < numEl; i++) {
    const randomId = Math.floor(Math.random() * 150) + 1;
    const url = `https://pokeapi.co/api/v2/pokemon/${randomId}/`;
    fetch(url)
      .then((x) => x.json())
      .then((pokemon) => {
        console.dir(pokemon);
        renderPoke(pokemon);
      })
      .catch((error) => console.error(error));
  }
}
function renderPoke(pokemon) {

  
  let temp = document.getElementById("template__card");
  let clonedTemp = temp.content.cloneNode(true);
  cardEl = clonedTemp.querySelector(".card__poke");
  let nameEl = clonedTemp.querySelector(".name__poke");
  let imgEl = clonedTemp.querySelector(".img__poke");
  btn__extraEl = clonedTemp.querySelector(".btn__extra");

  cardEl.setAttribute("id", pokemon.id);

  nameEl.textContent = pokemon.name;
  imgEl.setAttribute("src", pokemon.sprites.front_shiny);
  btn__extraEl.setAttribute("id", pokemon.name);

  out.appendChild(clonedTemp);
  
  btn__extraEl.addEventListener("click", newCard);

    function newCard(event) {

    out2.innerHTML = "";
    modalEl.style.display = "block";
    
    

    
    let url1 = `https://pokeapi.co/api/v2/pokemon/${event.target.getAttribute("id")}`;

        fetch(url1)
          .then((resp) => resp.json())
          .then((pokemon) => {
    
        
      let typesEl = pokemon.types;
      let pokeType = "";
      typesEl.forEach((t) => {
        pokeType += " " + t.type.name;
        console.log(pokeType);
      });
  
      let abs = pokemon.abilities;
      let abilities = "";
      abs.forEach((ab) => {
        abilities = "|" + ab.ability.name;
      });
  
  
    let temp2 = document.getElementById("template__card2");
    let clonedTemp2 = temp2.content.cloneNode(true);
    cardEl2 = clonedTemp2.querySelector(".card__poke2");
    let nameEl2 = clonedTemp2.querySelector(".name__poke2");
    let imgEl2 = clonedTemp2.querySelector(".img__poke2");
    let typeEl = clonedTemp2.querySelector(".type__poke");
    let attackEl = clonedTemp2.querySelector(".attack");
    let defenseEl = clonedTemp2.querySelector(".defense");
    let statsW = clonedTemp2.querySelector(".stats__wrapper");

    let pokeStats = pokemon.stats;
    let pokeStat = "";
    pokeStats.map(myFunc);
    function myFunc(stats) {
      
    //  pokeStat += `${stats.stat.name} : ${stats.base_stat}`;
      statsW.innerHTML += `<li>${stats.stat.name} : ${stats.base_stat}</li>`;

      console.log(pokeStat);
      }

    
  
    cardEl2.setAttribute("id", pokemon.id);
    
    nameEl2.textContent = pokemon.name;
    imgEl2.setAttribute("src", pokemon.sprites.front_shiny);
    typeEl.textContent = pokeType;
    attackEl.textContent = pokeStat;
    defenseEl.innerHTML = pokemon.defense;
    
     
     out2.appendChild(clonedTemp2); 
      
  })
  }

  closeEl.addEventListener("click", function() {
    modalEl.style.display = "none";
   });

   window.addEventListener("click", function(event) {
    if(event.taget == modalEl) {
    modalEl.style.display = "none";
    }
   });
   


      }

      

  

  
