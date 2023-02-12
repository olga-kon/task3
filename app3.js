

  // consultar API

  
  let id;
  const out2 = document.getElementById("render2");
  let cardEl;
  
  

  function getInfo(id) {
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      
      .then(x => x.json())
      .then(pokemon => {
        console.dir(pokemon);
        renderPoke(pokemon);
      })
      .catch(error => console.error(error));
  }

  function getPoke(num) {
    for (let i = 1; i < num; i++) {
        getInfo(i);
    }
  }
   
  getPoke(2);

   function renderPoke(pokemon) {
    
        
        let typesEl = pokemon.types;
        let pokeType = "";
        typesEl.forEach((t) => {
          pokeType += " " + t.type.name;
          console.log(pokeType);
        });
    
        let abs = pokemon.abilities;
        let abilities = "";
        abs.forEach((ab) => {
          // console.dir(ab);
          // console.log(ab.ability.name);
          abilities = "|" + ab.ability.name;
        });

      /*let pokeStats = pokemon.stats;
      let pokeAttack = "";
      pokeStats.forEach((a) => {
        pokeAttack += " " + a[1];
        console.log(pokeAttack);
      });*/

      let pokeStats = pokemon.stats;
      let pokeStat = "";
      pokeStats.map(myFunc);
      function myFunc(stats) {
        
        pokeStat += `${stats.stat.name} : ${stats.base_stat}`;
        console.log(pokeStat);
        }
      
    
      let temp2 = document.getElementById("template__card2");
      let clonedTemp2 = temp2.content.cloneNode(true);
      cardEl2 = clonedTemp2.querySelector(".card__poke2");
      let nameEl2 = clonedTemp2.querySelector(".name__poke2");
      let imgEl2 = clonedTemp2.querySelector(".img__poke2");
      let typeEl = clonedTemp2.querySelector(".type__poke");
      let attackEl = clonedTemp2.querySelector(".attack");
      let defenseEl = clonedTemp2.querySelector(".defense");

      
    
      cardEl2.setAttribute("id", pokemon.id);
      
      nameEl2.textContent = pokemon.name;
      imgEl2.setAttribute("src", pokemon.sprites.front_shiny);
      typeEl.textContent = pokeType;
      attackEl.textContent = pokeStat;
      defenseEl.innerHTML = pokemon.defense;
      
       
       out2.appendChild(clonedTemp2);  
    }

    
   
  
   
   
    

    
