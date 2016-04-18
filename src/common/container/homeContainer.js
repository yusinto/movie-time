import Relay from 'react-relay';
import HomeComponent from '../component/homeComponent';

export default Relay.createContainer(HomeComponent, {
  initialVariables: {
    genre: ''
  },
  fragments: {
    /*eslint-disable no-unused-vars*/
    viewer: () => Relay.QL`
            fragment on User {
                movieList(genre: $genre) {
                    title,
                    genres
                },
                allGenres
            }
        `
  }
  /*eslint-enable no-unused-vars*/
});
