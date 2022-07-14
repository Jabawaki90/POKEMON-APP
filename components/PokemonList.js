import PokemonCard from "./PokemonCard";
import PaginationButton from "./PaginationButton";

const PokemonList = ({ pokemonList }) => {
  const list = pokemonList.results;
  console.log(pokemonList);
  console.log(list);
  return (
    <div className="mt-5 container-fluid bg-secondary ">
      <PaginationButton />
      {list.map((pokemon, index) => {
        const { name } = pokemon;
        return <PokemonCard key={index} name={name} index={index + 1} />;
      })}
      <PaginationButton />
    </div>
  );
};

export default PokemonList;
