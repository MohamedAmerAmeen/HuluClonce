import React from 'react'
import Head from 'next/head'
import Header from '../Components/Header'
import MovieDetail from '../components/MovieDetail'
import Footer from '../components/Footer'

const MovieDetails = (props) => {
  return (
    <div>
        <Head>
            <title>HULU 2.0 | Clone</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* Header */}
        <Header/>
        {/* Movie Details  */}
        <MovieDetail MovieData={props}/>
        <Footer/>
    </div>
  )
}

export default MovieDetails

export async function getServerSideProps(context) {
    const MovieId = context.query.MovieId;
    const request = await fetch(`https://api.themoviedb.org/3/movie/${MovieId}?api_key=3fee6f3db8e1f60f373cb20f26be82a6&language=en-US`).then((res)=>res.json())
    const cast = await fetch(`https://api.themoviedb.org/3/movie/${MovieId}/credits?api_key=3fee6f3db8e1f60f373cb20f26be82a6&language=en-US`).then((res)=>res.json())

    return {
      props: {
        result:request,
        resultCast:cast
      }, // will be passed to the page component as props
    }
  }
