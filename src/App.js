import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MovieList, EditMovie, MovieDetails, NewMovie, NotFound } from './pages';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ MovieList } />
          <Route exact path="/movies/new" component={ NewMovie } />
          <Route exact path="/movies/:id" component={ MovieDetails } />
          <Route exact path="/movies/:id/edit" component={ EditMovie } />
          <Route path="*" component={ NotFound } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
