'use client';

export default function ErrorWprapper({error}: {error: Error}) {
  return (
    <h1>Oops!!!{error.message}</h1>
  )
}