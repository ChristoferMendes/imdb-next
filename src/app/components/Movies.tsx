import React from 'react'
import { Movie } from '../page'
import Card from './Card'

export default function Movies({ movies }: { movies: Movie[] }) {
  return (
    <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl-grid-cols-5 max-w-6xl mx-auto py-4'>
      {movies.map(item => <Card movie={item}  key={item.id} />)}
    </div>
  )
}
