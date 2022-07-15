import Image from "next/image";
import { useState } from "react";

const SinglePokemon = ({ poke }) => {
  const [pokemon, setPokemon] = useState({ poke });
  console.log("single poke page");
  console.log(pokemon);
  console.log(pokemon.poke.id);

  const { id, name, base_experience, abilities } = pokemon.poke;

  return (
    <div className="bg-info p-5 mt-5 w-50 d-flex align-items-center flex-column justify-content-center">
      <h2>{id}</h2>
      <Image
        className=""
        height={400}
        width={400}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
        alt={name}
      />

      {/* <Image /> */}
      <div className="d-flex align-items-center flex-column justify-content-center">
        <h1>{name}</h1>
        <div className="d-flex align-items-center flex-column justify-content-center">
          <h4>Abilities:</h4>
          <ul>
            {abilities.map((e) => {
              const ability = e.ability.name;
              console.log(e.ability.name);
              return <li key={id}>{ability}</li>;
            })}
          </ul>
        </div>

        <p>Base Experience: {base_experience}</p>
      </div>
    </div>
  );
};

export default SinglePokemon;
