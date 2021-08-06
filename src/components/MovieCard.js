import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, storyline, imagePath, id } } = this.props;
    return (
      <div className="movie-card" data-testid="movie-card">
        <h1 className="movie-card-title">{ title }</h1>
        <img className="movie-card-image" src={ imagePath } alt={ title } />
        <p className="movie-card-body">{ storyline }</p>
        <Link
          to={ `/movies/${id}` }
        >
          VER DETALHES
        </Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    id: PropTypes.number,
  }),
};

MovieCard.defaultProps = {
  movie: {
    title: '',
    storyline: '',
    imagePath: '',
    id: 0,
  },
};

export default MovieCard;
