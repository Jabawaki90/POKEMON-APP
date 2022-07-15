import Navbar from "../components/Navbar";
import SinglePokemons from "../components/SinglePokemon";
import Footer from "../components/Footer";
import { useRouter } from "next/router";

let pokemon = "";

const SinglePokemon = ({ result }) => {
  const router = useRouter();
  const { singlePokemon } = router.query;
  pokemon = singlePokemon;
  // console.log("route");
  // console.log(result);

  return (
    <div className="bg-secondary mt-5 d-flex align-items-center flex-column justify-content-center">
      <Navbar />
      <SinglePokemons poke={result} />
      <Footer />
    </div>
  );
};

export default SinglePokemon;

export async function getStaticPaths() {
  return {
    paths: [{ params: { singlePokemon: pokemon } }],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  // console.log(params.id);
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${params.singlePokemon}/`
  );
  const data = await res.json();
  return {
    props: {
      result: data,
    },
  };
}
