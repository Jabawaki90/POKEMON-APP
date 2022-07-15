import Image from "next/image";

const PokemonCard = ({ name, url }) => {
  const startPoint = 34;

  const pokemonIndex = url.slice(startPoint, url.length - 1);
  // console.log(url)
  // console.log(pokemonIndex)

  return (
    <>
      <div className="card m-4 d-inline-flex">
        <Image
          className="card-img-top"
          height={300}
          width={300}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonIndex}.png`}
          alt={name}
        />
        <div className="card-body d-inline-flex justify-content-center">
          <h4>{name}</h4>
        </div>
      </div>
    </>
  );
};

export default PokemonCard;
