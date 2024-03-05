import Link from "next/link";

export async function getServerSideProps() {
  console.log("HOME BACKEND");
  const URL = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0";

  const response = await fetch(URL);
  const data = await response.json();

  return {
    props: {
      pokemon: data.results,
    },
  };
}

export default function Home({ pokemon }) {
  console.log("HOME FRONTEND");
  return (
    <ul>
      {pokemon.map((poke) => {
        return (
          <li key={poke.name} className="mb-2">
            <Link
              className="bg-black rounded-e text-white p-1"
              href={"/pokemon/" + poke.name}
            >
              {poke.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
