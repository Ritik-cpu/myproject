import React from 'react'
import { Link } from 'react-router-dom'
const Movie = ({show}) => {
  return (
    <>
<article className='movie'>
      <div className='img-container'>
        <img src={show.image.medium} alt={show.name} />
      
      </div>
      <div className='movie-footer'>
      <h3>{show.name}</h3>
        <h3>{show.language}</h3>
        <h4>{show.type}</h4>
        <p>{show.status}</p>
        <p>{show.rating.average}</p>
        <p>{show.id}</p>
        <Link to={`/movie/${show.externals.thetvdb}`} className='btn btn-primary btn-details'>
          details
        </Link>
      </div>
    </article>
    </>

  
  )
}

export default Movie
