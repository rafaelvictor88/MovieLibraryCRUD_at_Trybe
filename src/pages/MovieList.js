import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';
import { getMovies } from '../services/movieAPI';

// import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    getMovies().then((response) => {
      // console.log(response);
      this.setState({
        movies: [...response],
      });
    });
  }

  render() {
    const { movies } = this.state;

    if (movies.length === 0) return <Loading />;

    return (
      <div>
        <div className="movie-list" data-testid="movie-list">
          {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </div>
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
