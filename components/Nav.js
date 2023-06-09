import React from 'react'
import request from '../utils/request'
import { useRouter } from 'next/router'
const Nav = () => {
    const router = useRouter();
  return (
    <nav className='relative'>
        <div className='flex flex-row px-10 sm:px-20 whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide'>
            {Object.entries(request).map(([key,{title,url}])=>(
                <h2 onClick={()=>router.push(`/?genre=${key}`)} className='cursor-pointer transtion duration-100 transform hover:scale-125 hover:text-white' key={key}>{title}</h2>
            ))}
        </div>
        <div className='absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/6'/>
    </nav>
  )
}

export default Nav