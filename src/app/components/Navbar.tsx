import React from 'react'
import NavBarItem from './NavBarItem'

export default function Navbar() {
  return (
    <div className='flex justify-center dark:bg-gray-600 bg-amber-100 lg:text-lg p-4'>
      <NavBarItem title="Trending" param="trending" />
      <NavBarItem title="Top Rated" param="top_rated" />
    </div>
  )
}
