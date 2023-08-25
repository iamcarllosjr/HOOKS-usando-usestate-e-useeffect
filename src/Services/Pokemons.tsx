type Props = {
  name: string;
  url: string;
} 

const Pokemons = (props: Props) => {
  return (
    <>
    <h2>{props.name}</h2>
    <p>{props.url}</p>
    </>
  )
}

export default Pokemons