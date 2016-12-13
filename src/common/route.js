import React from 'react';
import {Route, IndexRedirect} from 'react-router';
import App from './component/appComponent';
import {homeQueries} from './query';
import Home from './container/homeContainer';
import Contact from './container/contactContainer';
import Loader from './component/loaderComponent';

const setDefaultGenre = (params) => {
  return {
    ...params,
    genre: params.genre ? params.genre.toLowerCase() : 'all'
  };
};

/*
 * React router routes are set up here
 * */
const Routes =
  (<Route path="/" component={App}>
    <IndexRedirect to="/home"/>
    <Route path="/home" component={Home} queries={homeQueries}
           stateParams={['genre']}
           renderLoading={() => <Loader />}
           prepareParams={setDefaultGenre}/>
    <Route path="/contact" component={Contact} />
  </Route>);

export default Routes;