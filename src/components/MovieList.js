import React from 'react'
import Loading from './Loading'
import { useGlobalContext } from '../context'
import Movie from './Movie'
const MovieList = () => {
  const { movie, loading } = useGlobalContext()
  if(loading){
    return(
      <Loading/>

    )
  }
  return (
    <section className='section'>
      <h2 className='section-title'>Movie List</h2>
      <div className='movie-center'>
        {movie.map((item) => {
          const{show}=item;
          return <Movie key={show.id} {...item} />
        })}
      </div>
    </section>
  )
}

export default MovieList
