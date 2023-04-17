import React from 'react'
import Image from 'next/image'
import HeaderItem from './HeaderItem'
import {HomeIcon,FilmIcon,TvIcon,UserIcon} from '@heroicons/react/24/outline'
import Link from 'next/link'
const Header = () => {
  return (
    <header className='flex flex-col  sm:flex-row m-5 justify-between items-center px-8'>
        <Image className='object-contain hover:animate-spin ' src='https://i.ibb.co/54FKmX8/movie-icon-15157.png' alt='' width={80} height={40}/>

        <div className='flex flex-row flex-grow justify-evenly max-w-2xl'>
            <Link href='/'><HeaderItem text='HOME' Icon={HomeIcon}/></Link>
            <Link href='/Movies'><HeaderItem text='Movie' Icon={FilmIcon}/></Link>
            <Link href='/TV'><HeaderItem text='TV Show' Icon={TvIcon}/></Link>
            <HeaderItem text='User' Icon={UserIcon}/>
        </div>
    </header>
  )
}

export default Header