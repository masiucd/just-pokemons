async function getPokemons() {
  const base = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
  const result = await fetch(base)
  const data = await result.json()
  console.log("da", da)
}

export default function Home() {
  return <h1>Pokemon app</h1>
}
