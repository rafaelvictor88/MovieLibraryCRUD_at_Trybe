import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectPage: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    const { createMovie } = movieAPI;
    createMovie(newMovie).then(() => {
      this.setState({ redirectPage: true });
    });
  }

  render() {
    const { redirectPage } = this.state;
    if (redirectPage === true) return <Redirect to="/" />;
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

export default NewMovie;
