import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      shouldRedirect: false,
      movie: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { getMovie } = movieAPI;
    const { match: { params: { id } } } = this.props;
    getMovie(id).then((results) => this.setState({
      movie: { ...results },
      loading: false,
    }));
  }

  handleSubmit(updatedMovie) {
    const { updateMovie } = movieAPI;
    updateMovie(updatedMovie).then(() => this.setState({ shouldRedirect: true }));
  }

  render() {
    const { loading, shouldRedirect, movie } = this.state;

    if (shouldRedirect === true) return <Redirect to="/" />;

    if (loading === true) return <Loading />;

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

EditMovie.propTypes = {
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

EditMovie.defaultProps = {
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

export default EditMovie;
