import React from 'react'
import Thumbnail from './Thumbnail'

const Results = ({Movies}) => {
    const BaseURL="https://image.tmdb.org/t/p/original/"
  return (
    <div className='px-5 py-10 sm:grid md:grid-cols-2 xl:grid-cols-3 2xl: grid-cols-4'>
        {Movies.map((movie)=>(
        
        <Thumbnail 
            key={movie.id}
            MovieName={movie.original_title} 
            ImageSrc={`${BaseURL}${movie.poster_path}`}
            OverView={movie.overview}
            MediaType={movie.media_type}
            ReleaseDate={movie.release_date}
            VoteCount={movie.vote_count}
            MovieId={movie.id}/>
        ))}
    </div>
  )
}

export default Results