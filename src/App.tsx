import { useEffect, useState } from 'react' //Hooks
import { getPokemons, Pokemons} from "./Services"; 
import './App.css'

function App() {
  const [relogio, setRelogio] = useState("");
  const [pokemons, setPokemons] = useState([]);
  
  //useEffect espera dois parametros, EFEITO(Função de execução) e DEPENDENCIAS(Gatilho)
  useEffect(() => {
    setRelogio(new Date().toString());//Para mostrar data e hora, e dpois convertendo para string

    getPokemons()
     .then(data => setPokemons(data))
     .catch(error => console.error(error));
  }, []);

  return (
    <>
      <h1>Hello World</h1>
      <p>Utilizando Hooks do React</p>
      {/* AO RENDERIZAR UM STATE DENTRO DE CHAVES, NÃO ACEITA COMO OBJETO, ACEITA STRING OU NUMBER */}
      <p>{relogio}</p>
      <h1>Pokemons</h1>
      {pokemons.map(pokemon => 

          <div key={pokemon.index}>
             <Pokemons  name={pokemon.name} url={pokemon.url}/>
          </div>

      )}
    </>
  )
}

export default App
