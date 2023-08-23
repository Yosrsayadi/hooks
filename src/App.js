import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import MovieThumbnail from './components/MovieThumbnail';
import Footer from './components/Footer';
import MovieList from './components/MovieList';
import Filter from './components/Filter';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Interstellar',
      description: 'Interstellar is a science fiction film',
      posterURL: '/images/movieone.jpg',
      rating: 4.8,
    },
    {
      title: 'Inception',
      description: "Inception is a mind-bending thriller",
      posterURL: '/images/movietwo.jpg',
      rating: 4.9,
    },
    // Add more movies here
  ]);

  const [titleFilter, setTitleFilter] = useState('');
  const [rateFilter, setRateFilter] = useState('');
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: '',
  });

  const handleTitleFilterChange = (event) => {
    setTitleFilter(event.target.value);
  };

  const handleRateFilterChange = (event) => {
    setRateFilter(event.target.value);
  };

  const handleNewMovieChange = (event) => {
    const { name, value } = event.target;
    setNewMovie((prevMovie) => ({ ...prevMovie, [name]: value }));
  };

  const handleAddMovie = () => {
    setMovies((prevMovies) => [...prevMovies, newMovie]);
    setNewMovie({
      title: '',
      description: '',
      posterURL: '',
      rating: '',
    });
  };

  const clearFilters = () => {
    setTitleFilter('');
    setRateFilter('');
  };

  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      (rateFilter === '' || movie.rating >= parseFloat(rateFilter))
    );
  });

  return (
    <div className="app">
      <Header />
      <Navbar />
      <div className="add-movie-form">
        <h2>Add New Movie</h2>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newMovie.title}
          onChange={handleNewMovieChange}
        />
        {/* Add */}
        <button onClick={handleAddMovie}>Add Movie</button>
      </div>
      <Filter
        titleFilter={titleFilter}
        rateFilter={rateFilter}
        handleTitleFilterChange={handleTitleFilterChange}
        handleRateFilterChange={handleRateFilterChange}
        clearFilters={clearFilters}
      />
      <MovieList movies={filteredMovies} />
      <div className="movie-thumbnails">
        {movies.map((movie, index) => (
          <MovieThumbnail key={index} movie={movie} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default App;

