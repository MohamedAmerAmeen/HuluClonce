import React from 'react'
import Image from 'next/image'
import {HandThumbUpIcon} from '@heroicons/react/24/outline'
import Router, { useRouter } from 'next/router'
const Thumbnail = ({MovieName,ImageSrc,OverView,MediaType,ReleaseDate,VoteCount,MovieId}) => {
  const router = useRouter();
  return (
    <div onClick={()=>router.push(`/MovieDetails/?MovieId=${MovieId}`)} className='group cursor-pointer p-2 transation-all duration-200 ease-in transform sm:hover:scale-105 hover:z-50'> 
        <Image layout='responsive' src={ImageSrc} alt='' width={1080} height={1080}/>
        <div className='p-2'>
            <p className='truncate max-w-md'>{OverView}</p>
            <h2 className='mt-1 text-2xl text-white transation-all duration-100 ease-in-out group-hover:font-bold'>{MovieName}</h2>
            <p className='flex items-center opacity-0 group-hover:opacity-100'>
                {MediaType} | {ReleaseDate} |   {VoteCount}
            </p>
        </div>
    </div>
  )
}

export default Thumbnail