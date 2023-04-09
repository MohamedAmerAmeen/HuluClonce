import React from 'react'
import Image from 'next/image'
import HeaderItem from './HeaderItem'
import {HomeIcon,LightBulbIcon,CheckBadgeIcon,LockOpenIcon} from '@heroicons/react/24/outline'

const Header = () => {
  return (
    <header className='flex flex-col sm:flex-row m-5 justify-between items-center'>
        <div className='flex flex-row flex-grow justify-evenly max-w-2xl'>
            <HeaderItem text='HOME' Icon={HomeIcon}/>
            <HeaderItem text='Trending' Icon={LightBulbIcon}/>
            <HeaderItem text='Approved' Icon={CheckBadgeIcon}/>
            <HeaderItem text='User' Icon={LockOpenIcon}/>
            <HeaderItem text='Approved' Icon={CheckBadgeIcon}/>
            <HeaderItem text='Approved' Icon={CheckBadgeIcon}/>

        </div>
        <Image className='object-contain ' src='https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg' alt='' width={200} height={100}/>
    </header>
  )
}

export default Header