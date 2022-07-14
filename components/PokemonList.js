import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemonList }) => {
  const list = pokemonList.results;
  console.log(list);
  return (
    <div className="mt-5 container-fluid bg-secondary ">
      {list.map((pokemon, index) => {
        const { name } = pokemon;
        return <PokemonCard key={index} name={name} index={index + 1} />;
      })}
    </div>
  );
};

export default PokemonList;
