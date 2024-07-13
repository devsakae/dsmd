import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFilm, BsInfoSquare } from 'react-icons/bs';
import DarkModeSwitch from './DarkModeSwitch';
import MenuItem from './MenuItem';

export default function Header() {
  return (
    <div className='flex justify-between mx-4 p-4 max-w-6xl sm:mx-auto items-center py-6'>
      <div className='flex'>
        <MenuItem title={'MOVIES'} address={'/'} Icon={ BsFilm } />
        <MenuItem title={'ABOUT ME'} address={'/about'} Icon={ BsInfoSquare } />
        <MenuItem title={'CONTACT'} address={'https://b09bz2i5ujx.typeform.com/to/QMUuYZVd'} Icon={ AiOutlineMail } />
      </div>
      <div className='flex items-center space-x-5 p-x-4'>
        <DarkModeSwitch />
        <Link href="/">
          <h2 className='text-2xl'>
            <span className='font-bold text-2xl mx-1'>DS</span>
            <span className='font-bold bg-amber-500 py-1 px-2 rounded-lg dark:text-black'>MD</span>
          </h2>
        </Link>
      </div>
    </div>
  )
}
