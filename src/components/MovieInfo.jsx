export default function MovieInfo({ movie }) {
  return (
    <div className='flex gap-3 text-xs py-1'>
    {movie.adult && (
      <div className='dark:bg-blue-600 bg-blue-300 px-2 py-0.5 rounded-md'>
        {movie.adult}
      </div>
    )}
    {movie.media_type && (
      <div className='dark:bg-blue-600 bg-blue-300 px-2 py-0.5 rounded-md'>
        {movie.media_type}
      </div>
    )}
    {/* Green, Red not working. Only blue. Why? */}
    {movie.original_language && (
      <div className='dark:bg-green-600 bg-green-300 px-2 py-0.5 rounded-md'>
        {movie.original_language}
      </div>
    )}
    <div className='dark:bg-blue-600 bg-blue-300 px-2 py-0.5 rounded-md'>
      {movie.release_date || movie.first_air_date}
    </div>
  </div>
    )
}
