import axios from 'axios';
import { useEffect, useState } from 'react';
import MovieList from './components/MovieList.js';
import Pagination from './components/Pagination.js';
import Modal from './components/Modal.js';
import './App.css';


function App() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const fetchMovies = async (page) => {
      try {
        const apiKey = process.env.REACT_APP_API_KEY;
        const searchUrl = process.env.REACT_APP_SEARCH_URL;
        const res = await axios.get(`${searchUrl}?api_key=${apiKey}&page=${page}`);
        setMovies(res.data.results);
        setTotalPages(res.data.total_pages);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies(currentPage);
  }, [currentPage]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  const handleCloseClick = () => {
    setSelectedMovie(null);
  }
  function Example() {
    useEffect(() => {
      document.title = 'Movies App';
    }, []);
  }

  return (
    <div className="App">
      <Example />
      <h1>Movies</h1>
      <MovieList role='list' movies={movies} onMovieClick={(movie) => setSelectedMovie(movie)} />

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          paginate={paginate}
        />



        <Modal show={selectedMovie} onClose={handleCloseClick} movie={selectedMovie} />


    </div>
  );
};

export default App;