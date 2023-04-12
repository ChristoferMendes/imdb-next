import Result from "./components/Result"

const API_KEY = process.env.API_KEY

interface HomeProps {
  searchParams: {
    genre: `top_rated` | 'trendind' | undefined
  }
}

export interface Result {
  adult: false
  background_path: string
  id: number;
  title: string;
  original_title: string
}

interface Data {
  results: Result[] | undefined
}


export default async function Home({ searchParams }: HomeProps) {
  const genre = searchParams.genre || 'trending'
  const genreSerialized = genre === 'top_rated' ? `movie/${genre}` : `${genre}/all/week`
  const res = await fetch(`https://api.themoviedb.org/3/${genreSerialized}?api_key=${API_KEY}&language=en-US&page=1`, {
    next: { revalidate: 10000 }
  })

  const data = await res.json() as Data;

  const { results } = data

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return (
    <div>
      <h1 className='text-red-900'>
        {results?.map(result => <Result key={result.id} result={result}/>)}
      </h1>
    </div>
  )
}
