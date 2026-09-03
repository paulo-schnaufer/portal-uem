import React from 'react';

export default function SkeletonCard() {
  return (
    <div
      className="surface-outline w-full max-w-md rounded-xl bg-surface p-6"
      aria-label="Só um instante..."
      role="status"
    >
      <div className="mb-4 h-5 w-2/3 animate-pulse rounded bg-border" />
      <div className="mb-2 h-4 w-full animate-pulse rounded bg-border" />
      <div className="mb-6 h-4 w-4/5 animate-pulse rounded bg-border" />
      <div className="h-10 w-40 animate-pulse rounded-lg bg-border" />
      <span className="sr-only">Só um instante...</span>
    </div>
  );
}