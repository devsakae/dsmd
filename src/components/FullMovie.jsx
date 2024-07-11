
export default function FullMovie({ movie }) {
  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
      <Image
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
        width={500}
        height={300}
        placeholder='blur'
        blurDataURL='/loading.svg'
        alt='Movie poster'
        className='rounded-lg'
      ></Image>
      <div className='p-2'>
        <div className='flex flex-row justify-between'>
          <div>
            <h2 className='font-bold'>{ movie.title || movie.original_name }</h2>
            { movie.genres.map((g) => (
              <span key={ g.id } className="text-xs font-semibold mr-2 px-2 py-1 rounded bg-amber-500">
                { g.name }
              </span>
            )) }
          </div>
          <div>
            <MovieLikes movie={ movie } />
          </div>
        </div>
        <p>
          { movie.overview }
        </p>
      </div>
      </div>
    </div>
  )
}
