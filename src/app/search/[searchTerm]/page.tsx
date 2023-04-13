import Movies from "@/app/components/Movies"
import { MoviesData } from "@/app/page"

export default async function Search({ params }: { params: { searchTerm: string } }) {
  const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=en-US&query=${params.searchTerm}&page=1&include_adult=true`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await res.json()

  const { results } = data as MoviesData

  console.log(data)

  return (
    <div>
      {results && results.length === 0 && (
        <h1>No results found</h1>
      )}

      {results && <Movies movies={results}/>}
    </div>
  )
}
