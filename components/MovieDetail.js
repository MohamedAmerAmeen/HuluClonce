import React,{useState} from 'react'
import Image from 'next/image'
import { PlayIcon } from '@heroicons/react/24/solid'
const MovieDetail = (MovieData) => {
  const Data = MovieData.MovieData.result
  const castData=MovieData.MovieData.resultCast
  const formatCompactNumber = (number) => {
    if (number < 1000) {
      return number;
    } else if (number >= 1000 && number < 1_000_000) {
      return (number / 1000).toFixed(1) + "K";
    } else if (number >= 1_000_000 && number < 1_000_000_000) {
      return (number / 1_000_000).toFixed(1) + "M";
    } else if (number >= 1_000_000_000 && number < 1_000_000_000_000) {
      return (number / 1_000_000_000).toFixed(1) + "B";
    } else if (number >= 1_000_000_000_000 && number < 1_000_000_000_000_000) {
      return (number / 1_000_000_000_000).toFixed(1) + "T";
    }
  }

    return (
    <div>
        <div  style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${Data?.backdrop_path})`}} className={`relative w-full h-[35rem] bg-center bg-cover bg-slate-100`} >
            <div className='absolute bottom-0 right-0 bg-black h-full w-full opacity-50'/>            
            <div className='absolute bottom-0 right-0 bg-gradient-to-t from-[#06202A] h-96 w-full'/>

            <div className="flex flex-col absolute bottom-0 left-0 right-0 px-4 py-2 ">
                <h1 className='text-4xl font-bold '>{Data.original_title}</h1>
                <div className='flex space-x-2 mt-5'>
                {Data.genres?.map((item)=>(
                    <p key={item.id} className='border-white border p-1 rounded-md bg-gray-800 '>{item.name}</p>
                ))}
                </div>

                <div className='flex space-x-3 mt-5 whitespace-nowrap overflow-x-scroll scrollbar-hide'>
                    <p className='min-w-[10rem] sm:md:lg:min-w-[15rem] text-xl sm:md:lg:xl:text-3xl flex justify-center items-center h-36  bg-red-600 rounded-lg group cursor-pointer'><PlayIcon className='group-hover:scale-150 transation duration-300 ease-in-out' width={80} height={80}/></p>
                    <p className='min-w-[10rem] sm:md:lg:min-w-[15rem] text-xl sm:md:lg:xl:text-3xl flex justify-center items-center h-36  bg-gray-500 bg-opacity-20 rounded-lg cursor-pointer'>{Data.release_date}</p>
                    <p className='min-w-[10rem] sm:md:lg:min-w-[15rem] text-xl sm:md:lg:xl:text-3xl flex justify-center items-center h-36  bg-gray-500 bg-opacity-20 rounded-lg cursor-pointer'>${formatCompactNumber(Data.budget)}</p>
                </div>

            </div>
        </div>

        <div className='px-5 py-10 sm:md:lg:xl:w-3/4 '>
            <h1 className='text-gray-500 text-xl font-semibold'>Description</h1>
            <p className=' mt-2 tracking-wider'>{Data?.overview}</p>
        </div>

        <div className='px-5'>
            <h1 className='text-gray-500 text-xl font-semibold'>Cast</h1>
            <div className='sm:md:lg:xl:w-3/4 mt-2 flex item scroll-mx-2 sm:md:lg:xl:space-x-5 overflow-x-scroll whitespace-nowrap scrollbar-hide'>
                {castData.cast.map((actor)=>(
                <div className='group mt-2 flex flex-col items-center'>
                    <img src={`https://image.tmdb.org/t/p/original${actor?.profile_path}`} className='w-20 h-20 rounded-full'/>
                    <p className='opacity-0 transation duration-500 group-hover:opacity-100'>{actor?.name}</p>
                </div>
            ))}
        </div>
        </div>

    </div>
  )
}

export default MovieDetail


