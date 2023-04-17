import React from 'react'
import Image from 'next/image'
import {HandThumbUpIcon} from '@heroicons/react/24/outline'
import Router, { useRouter } from 'next/router'
const Thumbnail = ({MovieType,MovieId,ImageSrc,Vote,MovieName,ReleaseDate}) => {
  const router = useRouter();
  return (
        <div className="flex-none w-32 md:w-48 lg:w-56 xl:w-64 px-4">
          <div onClick={()=>router.push(`/MovieDetails/?MovieId=${MovieId}`)} className='cursor-pointer'>
              <div className="relative">
              <img src={ImageSrc} alt="Movie poster" class="sm:w-full sm:h-auto" />
              {/* <div class="absolute top-0 right-0 p-2 bg-red-600 text-white font-bold text-xs">Trending</div> */}
            
              <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                <div className={`w-10 h-10 flex items-center justify-center border-2 rounded-full p-5 ${Vote>7?'border-green-600':'border-yellow-400'}`}>
                <p className='text-sm bg-gray-500 bg-opacity-25 '>{Vote}</p>
                </div>
              </div>
            
            </div>
            <p className="block text-lg font-semibold text-white leading-tight">{MovieName}</p>
            <div className="text-gray-400 mt-1">{ReleaseDate}</div>
          </div>
        </div>
    // <div onClick={()=>router.push(`/MovieDetails/?MovieId=${Mo}`)} className='group cursor-pointer p-2 transation-all duration-200 ease-in transform sm:hover:scale-105 hover:z-50'> 
    //     <Image layout='responsive' src={ImageSrc} alt='' width={1080} height={1080}/>
    //     <div className='p-2'>
    //         <p className='truncate max-w-md'>{OverView}</p>
    //         <h2 className='mt-1 text-2xl text-white transation-all duration-100 ease-in-out group-hover:font-bold'>{MovieName}</h2>
    //         <p className='flex items-center opacity-0 group-hover:opacity-100'>
    //             {MediaType} | {ReleaseDate} |   {VoteCount}
    //         </p>
    //     </div>
    // </div>
  )
}

export default Thumbnail