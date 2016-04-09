import Relay from 'react-relay';

/*
 * Relay queries consumed by our app lives here
 * */

export const homeQueries = {
  movieList: () => Relay.QL`query { movieList(genre: $genre) }`
};