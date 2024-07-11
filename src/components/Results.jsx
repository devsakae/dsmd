"use client";
import { useState } from 'react';
import { BsList } from 'react-icons/bs';
import { RxCardStack } from 'react-icons/rx';
import MoviesCard from "./MoviesCard";
import MoviesList from "./MoviesList";

export default function Results({ results }) {
  const [list, setList] = useState(false);

  return (
    <div className="mx-6">
      <div className="flex gap-4 justify-center mb-4">
        See results in
        <button onClick={ () => setList(true) } className={ `flex flex-row gap-1 ${list && 'border-amber-600 border-b-2'}` }><BsList className="mt-1" />List</button>
        <button onClick={ () => setList(false) } className={ `flex flex-row gap-1 ${!list && 'border-amber-600 border-b-2'}` }><RxCardStack className="mt-1" /> Cards</button>
      </div>
      <div className='flex flex-wrap gap-2 justify-center'>
        {
          list ? results.map((result) => <MoviesList key={result.id} movie={result} />) : results.map((result) => <MoviesCard key={result.id} movie={result} />)
        }
      </div>
    </div>
  )
}
