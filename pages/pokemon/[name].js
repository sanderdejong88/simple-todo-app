import Link from "next/link";

export async function getServerSideProps(context) {
  console.log("DETAIL BACKEND");

  const URL = "https://pokeapi.co/api/v2/pokemon/";

  const response = await fetch(URL + context.params.name);
  const data = await response.json();

  return {
    props: {
      pokemon: data,
    },
  };
}

export default function Pokemon({ pokemon }) {
  console.log("DETAIL FRONTEND");
  return (
    <div>
      <Link href="/">Back</Link>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
    </div>
  );
}
