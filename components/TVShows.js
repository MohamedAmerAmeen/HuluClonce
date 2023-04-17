import { useRouter } from 'next/router'
import React from 'react'

const TVShows = ({Movies}) => {
    const Trending = Movies.trending.results
    const router = useRouter()
  const BaseURL="https://image.tmdb.org/t/p/original/"
  return (
    <div className="p-8">
  <div className="container mx-auto px-4">
    <div  className="flex flex-wrap -mx-4 mt-8">
    {Trending.filter(x=>x.media_type==='tv').map((movie)=>(
      <div onClick={()=>router.push(`/MovieDetails/?MovieId=${movie.id}`)}  className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-8">
        <div className="relative">
          <a href="#" class="block">
            <img src={`${BaseURL}${movie.poster_path}`} alt="Movie poster" class="w-full h-auto" />
          </a>
          <div className="absolute top-0 right-0 p-2 bg-red-600 text-white font-bold text-xs">New</div>
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
            <a href="#" class="block text-xl font-bold text-white leading-tight">{movie.title}</a>
            <div className="text-gray-400 mt-1">{movie.release_date}</div>
          </div>
        </div>
      </div>
    ))}
    </div>
  </div>
</div>

  )
}

export default TVShows