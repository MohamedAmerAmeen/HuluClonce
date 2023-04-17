import React from 'react'
import Thumbnail from './Thumbnail'
import Image from 'next/image'
const AllMovie = ({Movies}) => {
  const Trending = Movies.trending.results
    const BaseURL="https://image.tmdb.org/t/p/original/"
  return (
    <div className="p-8">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap -mx-4 mt-8">
    {Trending.map((movie)=>(
      <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-8">
        <div className="relative">
          <a href="#" class="block">
            <img src={`${BaseURL}${movie.poster_path}`} alt="Movie poster" class="w-full h-auto" />
          </a>
          <div className="absolute top-0 right-0 p-2 bg-red-600 text-white font-bold text-xs">NEW</div>
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
            <a href="#" class="block text-xl font-bold text-white leading-tight">{movie.title}</a>
            <div className="text-gray-400 mt-1">Release Date</div>
          </div>
        </div>
      </div>
    ))}
    </div>
  </div>
</div>
    // <div className='px-5 py-10 sm:grid md:grid-cols-2 xl:grid-cols-3 2xl: grid-cols-4'>
    //     {Movies.map((movie)=>(
        
    //     <Thumbnail 
    //         key={movie.id}
    //         MovieName={movie.original_title} 
    //         ImageSrc={`${BaseURL}${movie.poster_path}`}
    //         OverView={movie.overview}
    //         MediaType={movie.media_type}
    //         ReleaseDate={movie.release_date}
    //         VoteCount={movie.vote_count}
    //         MovieId={movie.id}/>
    //     ))}
    // </div>
  )
}

export default AllMovie