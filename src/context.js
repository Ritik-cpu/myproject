import React, { useState, useContext, useEffect } from 'react'

const url = 'https://api.tvmaze.com/search/shows?q=all'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [movie, setMovie] = useState([])
  const [loading, setLoading] = useState(true)
  const [mybook,setMybook]=useState({})

  const handleFetchData = async () => {
    setLoading(true)
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setMovie(data)
      setLoading(false)

    } catch (error) {
      console.log(error)
      setLoading(false)

    }
 
    
}

useEffect(() => {
    handleFetchData();
},[])


  return (
    <AppContext.Provider
      value={{ movie, loading , mybook,setMybook}}
    >
      {children}
    </AppContext.Provider>
  )
}




// make sure use

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
