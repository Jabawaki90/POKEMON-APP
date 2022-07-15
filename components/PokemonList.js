import PokemonCard from "./PokemonCard";
import PaginationButton from "./PaginationButton";

const PokemonList = ({ pokemonList, next, prev }) => {
  const list = pokemonList.results;
  console.log(pokemonList);
  console.log(list);
  return (
    <div className="mt-5 container-fluid bg-secondary ">
      <PaginationButton next={next} prev={prev} />
      {list.map((pokemon, index) => {
        const { name, url } = pokemon;
        return <PokemonCard key={index} name={name} url={url} />;
      })}
      <PaginationButton next={next} prev={prev}/>
    </div>
  );
};

export default PokemonList;
