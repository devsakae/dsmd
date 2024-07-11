import Image from 'next/image';
import Link from 'next/link';
import MovieInfo from './MovieInfo';
import MovieLikes from './MovieLikes';

export default function MoviesCard({ movie }) {
  return (
    <div
      className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 max-w-sm group">
      <Link
        href={`/movie/${movie.id}`}
        key={movie.id}
      >
      <Image
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
        width={400}
        height={300}
        placeholder='blur'
        blurDataURL='/loading.svg'
        alt='Image not available'
        className='sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-150'
      ></Image>
      <div className="p-2">
        <p className='line-clamp-2 text-sm'>{ movie.overview }</p>
        <h2 className='truncate text-lg font-bold mt-2'>
          { movie.title || movie.original_name }
          {' ('}
          { movie.vote_average.toFixed(1) }
          {')'}
        </h2>
        <div className='flex flex-row justify-between align-middle'>
          <MovieInfo movie={ movie } />
          <MovieLikes movie={ movie } />
        </div>
      </div>
      </Link>
    </div>
  );
}
