import React from 'react'
import { Result as ResultProps } from '../page'

export default function Result({ result }: { result: ResultProps }) {
  return (
    <div>
      <p>{result.original_title}</p>
    </div>
  )
}
