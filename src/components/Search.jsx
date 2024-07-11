"use client";
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

export default function Search() {
  const searchRef = useRef();
  const router = useRouter();
  const searchMovie = (event) => {
    event.preventDefault();
    if (!searchRef.current.value) return;
    router.push('/search/' + searchRef.current.value)
  }
  
  return (
    <form onSubmit={ searchMovie } className="flex max-w-6xl mx-auto justify-between items-center px-5 gap-4">
      <input
        type="text"
        ref={ searchRef }
        placeholder='Search keywords...'
        className='w-full h-14 rounded-sm outline-none placeholder-gary-500 bg-transparent flex-1'
      />
      <button
        type="submit"
        className="text-amber-700 disabled:text-gray-400"
      >
        Search
      </button>
    </form>
  )
}
