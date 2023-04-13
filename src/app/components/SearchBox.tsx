'use client';
import { FormEvent, useState } from 'react';
import { SlMagnifier } from 'react-icons/sl'
import { useRouter } from 'next/navigation';


export default function SearchBox() {
  const [search, setSearch] = useState('')
  const router = useRouter()


  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    if (!search) return;

    router.push(`/search/${search}`)

  }

  return (
    <form onSubmit={handleSubmit} className='flex max-w-6xl items-center mx-auto justify-between px-5'>
      <input
        type="text"
        title=''
        placeholder='Search keywords...'
        className='w-full h-14 rounded-sm placeholder:gray-500 outline-none bg-transparent'
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <button type='submit' title="button">
        <SlMagnifier className={`text-amber-600 ${!search && 'text-gray-400'}`} />
      </button>
    </form>
  )
}
