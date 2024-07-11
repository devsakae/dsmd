import { FiThumbsUp } from 'react-icons/fi'

export default function MovieLikes({ movie }) {
  return (
    <div className='flex flex-row gap-2 py-1'>
      <FiThumbsUp />
      <span className='text-sm'>{ movie.popularity }</span>
    </div>
  )
}
