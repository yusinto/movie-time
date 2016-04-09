import React from 'react';
import {Route, IndexRedirect} from 'react-router';
import App from './component/appComponent';
import {homeQueries} from './query';
import Home from './component/homeComponent';
import Loader from './component/loaderComponent';

// const setDefaultGenre = (nextState, replace) => {
//   if (!nextState.params.genre) {
//     replace({
//       pathname: '/home/all'
//     });
//
//     return;
//   }
//
//   // if genre is not all low caps, then convert to low caps
//   const lowerCasedGenre = nextState.params.genre.toLowerCase();
//   if(lowerCasedGenre !== nextState.params.genre)
//   replace({
//     pathname: `/home/${lowerCasedGenre}`
//   });
// };

const setDefaultGenre = (params) => {
  return {
    ...params,
    genre: params.genre ? params.genre.toLowerCase() : 'all'
  }
};

/*
 * React router routes are set up here
 * */
const Routes =
  (<Route path="/" component={App}>
    <IndexRedirect to="/home"/>
    <Route path="/home(/:genre)" component={Home} queries={homeQueries} renderLoading={() => <Loader />} prepareParams={setDefaultGenre}/>
  </Route>);

export default Routes;