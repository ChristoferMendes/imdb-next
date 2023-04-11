'use client';
import Link from 'next/link'
import React from 'react'
import { useSearchParams } from 'next/navigation'

export default function NavBarItem({ title, param }: { title: string, param: string }) {
  const searchParams = useSearchParams()
  const genre = searchParams.get('genre')

  const isCurrent = () => {
    if (!genre) return;

    return genre === param;
  }

  const dynamicDecoration = isCurrent() && 'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg'

  return (
    <div>
      <Link
        className={`m-4 hover:text-amber-600 font-semibold p-2 ${dynamicDecoration}`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  )
}
