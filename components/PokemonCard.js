import Image from "next/image";

const PokemonCard = ({ name, index }) => {
  const pokeIndex = index + ".png";
  return (
    <>
      <div className="card m-4 d-inline-flex">
        <Image
          className="card-img-top"
          height={300}
          width={300}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeIndex}`}
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
