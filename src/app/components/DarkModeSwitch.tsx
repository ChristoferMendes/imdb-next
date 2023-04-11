'use client';

import { MdLightMode } from 'react-icons/md'
import { BsFillMoonFill } from 'react-icons/bs'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react';
import { ImSpinner2 } from 'react-icons/im'

export default function DarkModeSwitch() {
  const { setTheme, theme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  const currentTheme = theme === 'system' ? systemTheme : theme;

  useEffect(() => {
    setMounted(true)
  }, [])


  if (!mounted) {
    return (
      <ImSpinner2 className="text-xl animate-spin text-cyan-700" />
    )
  };

  return (
    <>
      {currentTheme === 'dark' ? (
        <MdLightMode className='text-xl cursor-pointer hover:text-amber-500' onClick={() => setTheme('light')} />
      ) : (
        <BsFillMoonFill className='text-xl cursor-pointer hover:text-amber-500' onClick={() => setTheme('dark')} />
      )}
    </>
  )
}
