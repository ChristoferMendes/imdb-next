import Movies from "./components/Movies"

const API_KEY = process.env.API_KEY

interface HomeProps {
  searchParams: {
    genre: `top_rated` | 'trendind' | undefined
  }
}

export interface Movie {
  adult: false
  backdrop_path: string
  poster_path: string
  id: number;
  title: string;
  original_title: string
  overview: string
  name: string
  release_date: string
  first_air_date: string
  vote_count: number
  vote_average: number;
}

export interface MoviesData {
  results: Movie[] | undefined
}


export default async function Home({ searchParams }: HomeProps) {
  const genre = searchParams.genre || 'trending'
  const genreSerialized = genre === 'top_rated' ? `movie/${genre}` : `${genre}/all/week`
  const res = await fetch(`https://api.themoviedb.org/3/${genreSerialized}?api_key=${API_KEY}&language=en-US&page=1`, {
    next: { revalidate: 10000 }
  })

  const data = await res.json() as MoviesData;

  const { results } = data

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }


  return (
    <div>
      <div>
        {results && <Movies movies={results} />}
      </div>
    </div>
  )
}
