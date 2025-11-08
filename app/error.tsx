"use client"
import React from 'react'

export default function ErrorBoundary({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <main className="error-boundary" role="alert">
      <h1>Something went wrong</h1>
      <p>{error.message}</p>
      <button type="button" onClick={() => reset()}>Retry</button>
    </main>
  )
}
