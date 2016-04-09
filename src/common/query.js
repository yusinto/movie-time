import Relay from 'react-relay';

/*
 * Relay queries consumed by our app lives here
 * */

export const homeQueries = {
  viewer: () => Relay.QL`query { viewer }`
};