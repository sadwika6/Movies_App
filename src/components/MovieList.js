import React from 'react';


const MovieList = ({ movies, onMovieClick }) => {
    const imageUrl = process.env.REACT_APP_IMAGE_URL;
    return (
        <div className="movie-list">
            {movies.map(movie => (
                <div key={movie.id} className='movie-card' role='card' onClick={() => onMovieClick(movie)}>
                    <img src={`${imageUrl}${movie.poster_path}`} alt={movie.title} className='image' />
                    <div className="movie-details">
                        <h2>{movie.title}</h2>
                    </div>
                </div>
            ))}
        </div>
    );
};
export default MovieList;