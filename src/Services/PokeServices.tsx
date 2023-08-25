import axios from "axios";

const getPokemons = async () => {
   const response = await axios.get("https://pokeapi.co/api/v2/pokemon/");
   return response.data.results;
}

export default getPokemons;