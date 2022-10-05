import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import pages
import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'
// import components
import Book from './pages/Book'
import Navbar from './components/Navbar'
import SingleMovie from './pages/singleMovie';
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='movie/:id' element={<SingleMovie />} />
        <Route path='*' element={<Error />} />
        <Route path='book' element={<Book />} />

      </Routes>
    </Router>
  )
}

export default App
