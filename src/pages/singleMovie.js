import React from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
import { useGlobalContext } from '../context'

// const { setSomeState } = React.useContext(Contxt);
 
export default function SingleMovie() {
  const { setMybook } = useGlobalContext()

  const { id } = useParams()
  const [loading, setLoading] = React.useState(false)
  const [movie, setMovie] = React.useState(null)
  React.useEffect(() => {
    setLoading(true)
    async function getMovie() {
      try {
        const response = await fetch(
`https://api.tvmaze.com/lookup/shows?thetvdb=${id}`        )
        const data = await response.json()
        setMovie(data)
        setMybook(data)
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
    getMovie()
  }, [id,setMybook])
  if (loading) {
    return <Loading/>
  }
  if (!movie) {
    return <h2 className='section-title'>no Movie to display</h2>
  } else {
    const { name,image,type,language,status,averageRuntime,premiered,officialSite,rating,weight,summary } = movie
    return (
      <section className='section movie-section'>
        <Link to='/' className='btn btn-primary'>
          back home
        </Link>
        <h2 className='section-title'>{name}</h2>
        <div className='drink'>
          <img src={image.original} alt={name}></img>
          <div className='drink-info'>
            <p>
              <span className='drink-data'>name :</span> {name}
            </p>
            <p>
              <span className='drink-data'>Type :</span> {type}
            </p>
            <p>
              <span className='drink-data'>language :</span> {language}
            </p>
            <p>
              <span className='drink-data'>status :</span> {status}
            </p>
            <p>
              <span className='drink-data'>averageRuntime :</span> {averageRuntime}
            </p>
            <p>
              <span className='drink-data'>Premiered :</span>{premiered}
             
            </p>
            <p>
              <span className='drink-data'>officialSite :</span> {officialSite}
            </p>
            <p>
              <span className='drink-data'>rating :</span> {rating.average}
            </p>
            <p>
              <span className='drink-data'>weight :</span> {weight}
            </p>
            <p>
              <span className='drink-data'>summary :</span> {summary}
            </p>
          </div>
        </div>
        <Link to='/book'>
        <div className="btn btn-primary btn-details">book-now</div>

        </Link>
      </section>
    )
  }
}
