import React from 'react'
import { Movie } from '../page'
import Link from 'next/link'
import Image from 'next/image'
import { FiThumbsUp } from 'react-icons/fi'
import Rating from './Rating'

export default function Card({ movie }: { movie: Movie }) {
  return (
    <div className='cursor-pointer sm:p-3 sm:hover:shadow-slate-400 dark:sm:hover:shadow-slate-600 sm:shadow-md rounded-lg sm:border sm:border-slate-500 sm:m-2 transition-shadow duration-200 group'>
      <Link href={`/movie/${movie.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
          width={500} height={300} alt={`${movie.title} image`}
          className='sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200 h-auto w-full'
        />
        <div className='p-2'>
          <p className='line-clamp-3'>{movie.overview}</p>
          <h2 className='truncate text-lg font-bold'>{movie.title || movie.name}</h2>
        </div>
      </Link>
      <div className='flex items-center space-x-3 justify-center md:justify-normal'>
        <p className='text-sm'>{movie.release_date || movie.first_air_date}</p>
        <Rating rating={movie.vote_average} />
      </div>
    </div>
  )
}
