'use client';
import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error, reset: () => void }) {

  useEffect(() => {
    console.log(error)
  }, [error])

  return (
    <div className="text-center mt-10">
      <p>Something went wrong</p>
      <button className="hover:text-amber-600" type="button" title="reset" onClick={() => reset()}>Try again</button>
    </div>
  )
}
