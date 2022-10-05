import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='error-page'>

      <h2>error page....</h2>
      <h2>404 not fund</h2>
      
      <Link to="/"><h2>back to click here</h2></Link>

      
    </div>
  )
}

export default Error
