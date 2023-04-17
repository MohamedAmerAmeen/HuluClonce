import { useRouter } from 'next/router'
import React from 'react'
import Thumbnail from './Thumbnail';

const Results = ({Movies}) => {
  const Trending = Movies.trending.results
  const NowPlaying = Movies.nowplaying.results
  const Popular = Movies.populer.results
  const router = useRouter();
  // console.log(Movies.result)
  // console.log(Movies.latest)
    const BaseURL="https://image.tmdb.org/t/p/original/"
  return (
  <div className=" sm:p-8">
    <div className="container mx-auto sm:px-4">

{/* Trending Now Section */}
    <h2 className="text-2xl font-bold sm:px-4 text-white">Trending</h2>
      <div className="flex overflow-x-auto scrollbar-hide mt-8 pb-4">
        {Trending.map((movie)=>(
          <Thumbnail key={movie.id} MovieId={movie.id} Vote={movie.vote_average} ReleaseDate={movie.release_date} MovieName={movie.title} ImageSrc={`${BaseURL}${movie.poster_path}` }/>
        ))}
      </div>

{/* Now Playing Section */}
      <h2 className="text-2xl font-bold sm:px-4 text-white">Now Playing</h2>
      <div className="flex overflow-x-auto scrollbar-hide mt-8 pb-4">
        {NowPlaying.map((movie)=>(
          <Thumbnail key={movie.id} MovieId={movie.id} Vote={movie.vote_average} ReleaseDate={movie.release_date} MovieName={movie.title} ImageSrc={`${BaseURL}${movie.poster_path}` }/>
        ))}
      </div>

{/* Now Playing Section */}
      <h2 className="text-2xl font-bold sm:px-4 text-white">Popular</h2>
      <div className="flex overflow-x-auto scrollbar-hide mt-8 pb-4">
        {Popular.map((movie)=>(
          <Thumbnail key={movie.id} MovieId={movie.id} Vote={movie.vote_average} ReleaseDate={movie.release_date} MovieName={movie.title} ImageSrc={`${BaseURL}${movie.poster_path}` }/>
        ))}
      </div>

    </div>
  </div>
  
  )
}

export default Results