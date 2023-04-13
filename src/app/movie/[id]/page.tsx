import Rating from "@/app/components/Rating";
import { Movie } from "@/app/page";
import Image from "next/image";

interface MoviePageProps {
  params: {
    id: string;
  }
}

async function getMovie(movieId: string) {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`);

  return await res.json() as Movie | undefined;
}

export default async function MoviePage({ params }: MoviePageProps) {
  const { id: movieId } = params

  const movie = await getMovie(movieId)
  console.log(movie)

  return (
    <div className="w-full">
      {movie && <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path || movie.backdrop_path}`}
          width={500} height={300} alt={`${movie.title} Poster`}
          className='rounded-lg w-full h-auto'
        />
        <div className="p-2">
          <h2 className="text-lg font-bold">{movie.title || movie.name}</h2>
          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">Overview:</span>
            {movie.overview}
          </p>
          <p className="mb-3">
            <span className="semibold mr-1">Date Released:</span>
            {movie.release_date || movie.first_air_date}
          </p>
          <Rating rating={movie.vote_average}/>
        </div>
      </div>}
    </div>
  )
}
