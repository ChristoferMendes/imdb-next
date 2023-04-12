import React from 'react'
import { ImSpinner2 } from 'react-icons/im'

type Size = 'text-xs' | 'text-sm' | 'text-md' | 'text-lg' | 'text-xl' | 'text-2xl' | 'text-3xl' | 'text-4xl' | 'text-5xl' | 'text-6xl' | 'text-7xl' | 'text-8xl' | 'text-9xl'

export default function LoadingSpinner({ size = 'text-5xl' }: { size?: Size}) {
  return (
    <ImSpinner2 className={`${size} text-amber-600 animate-spin mx-auto mt-96`} />
  )
}
