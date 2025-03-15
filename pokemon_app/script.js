const pokemonAttr = { 
  name: "", 
  id: 0, 
  weight: 0,
  height: 0,
  hp: 0,
  attack: 0,
  defense: 0,
  specialAttack: 0,
  specialDefense: 0,
  speed: 0,
  types: [],
  sprite: ""
};

const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", async () => {
  const query = searchInput.value.trim().toLowerCase();
  if (!query) return;

  const response = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${query}`);
  if (!response.ok) {
    alert("Pokémon not found");
    return;
  }

  const data = await response.json();
  updatePokemonData(data);
  updateUI();
});

const updatePokemonData =(data) => {
  pokemonAttr.name = data.name.toUpperCase();
  pokemonAttr.id = `#${data.id}`;
  pokemonAttr.weight = `Weight: ${data.weight}`;
  pokemonAttr.height = `Height: ${data.height}`;
  pokemonAttr.hp = data.stats[0].base_stat;
  pokemonAttr.attack = data.stats[1].base_stat;
  pokemonAttr.defense = data.stats[2].base_stat;
  pokemonAttr.specialAttack = data.stats[3].base_stat;
  pokemonAttr.specialDefense = data.stats[4].base_stat;
  pokemonAttr.speed = data.stats[5].base_stat;
  pokemonAttr.types = data.types.map(type => type.type.name.toUpperCase());
  pokemonAttr.sprite = data.sprites.front_default;
}

const updateUI = () => {
  document.getElementById("pokemon-name").textContent = pokemonAttr.name;
  document.getElementById("pokemon-id").textContent = pokemonAttr.id;
  document.getElementById("weight").textContent = pokemonAttr.weight;
  document.getElementById("height").textContent = pokemonAttr.height;
  document.getElementById("hp").textContent = pokemonAttr.hp;
  document.getElementById("attack").textContent = pokemonAttr.attack;
  document.getElementById("defense").textContent = pokemonAttr.defense;
  document.getElementById("special-attack").textContent = pokemonAttr.specialAttack;
  document.getElementById("special-defense").textContent = pokemonAttr.specialDefense;
  document.getElementById("speed").textContent = pokemonAttr.speed;

  const typesContainer = document.getElementById("types");
  typesContainer.innerHTML = "";
  pokemonAttr.types.forEach(type => {
    const typeElement = document.createElement("p");
    typeElement.textContent = type;
    typesContainer.appendChild(typeElement);
  });

  const existingSprite = document.getElementById("sprite");
  if (existingSprite) existingSprite.remove();

  const sprite = document.createElement("img");
  sprite.id = "sprite";
  sprite.src = pokemonAttr.sprite;
  sprite.alt = pokemonAttr.name;
  document.body.appendChild(sprite);
}