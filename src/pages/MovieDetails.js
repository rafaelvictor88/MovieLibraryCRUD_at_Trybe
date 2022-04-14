import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: {},
      loading: true,
    };
  }

  componentDidMount() {
    const { getMovie } = movieAPI;
    const { match: { params: { id } } } = this.props;
    getMovie(id).then((results) => this.setState({
      movie: { ...results },
      loading: false,
    }));
  }

  render() {
    const { movie: { title, storyline, imagePath, genre, rating, subtitle, id },
      loading } = this.state;

    if (loading === true) return <Loading />;

    return (
      <div className="movie-details" data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p className="movie-card-subtitle">{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <div id="edit-link-btn">
          <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        </div>
        <div className="links-buttons">
          <Link to="/">VOLTAR</Link>
        </div>
        <div className="links-buttons">
          <Link to="/" onClick={ () => movieAPI.deleteMovie(id) }>DELETAR</Link>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    id: PropTypes.number,
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }),
};

MovieDetails.defaultProps = {
  movie: {
    title: '',
    storyline: '',
    imagePath: '',
    id: 0,
  },
  match: {
    params: {
      id: 0,
    },
  },
};

export default MovieDetails;
