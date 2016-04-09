import React, {Component, PropTypes} from 'react';
import Relay from 'react-relay';
import {capitalize} from 'lodash';

/*
 * This is the index page. It shows a list of movies and their genres filterable by a genre dropdown.
 * */
class Home extends Component {
  static propTypes = {
    viewer: PropTypes.object.isRequired,
    params: PropTypes.object.isRequired,
    relay: PropTypes.object.isRequired
  };

  onChangeGenre = ({target: {value}}) => {
    this.props.relay.setVariables({
      genre: value
    });
  };

  generateHeaderSummary = () => {
    let headerSummary = '';
    const selectedGenre = capitalize(this.props.relay.variables.genre);

    if (selectedGenre.toLowerCase() === 'all') {
      if (this.props.viewer.movieList.length === 0) {
        headerSummary = 'The database is empty currently, there are no movies available.';
      } else {
        headerSummary = `Found ${this.props.viewer.movieList.length} movies in total in the database.`;
      }
    } else {
      switch (this.props.viewer.movieList.length) {
        case 0:
          headerSummary = `Found no movies under ${selectedGenre}`;
          break;
        case 1:
          headerSummary = `Found ${this.props.viewer.movieList.length} "${selectedGenre}" movie. `;
          break;
        default:
          headerSummary = `Found ${this.props.viewer.movieList.length} "${selectedGenre}" movies.`;
          break;
      }
    }

    return headerSummary;
  };

  render() {
    let headerSummary = this.generateHeaderSummary();

    return (
      <div className="home-root">
        <p>
          {headerSummary}
        </p>
        <div>
          <select className="genre-dropdown" onChange={this.onChangeGenre} value={this.props.relay.variables.genre}>
            <option value="all">All</option>
            {
              this.props.viewer.allGenres.map(g => <option key={g} value={g}>{capitalize(g)}</option>)
            }
          </select>
        </div>
        <div className="table-scroll">
          <table>
            <thead>
            <tr>
              <th width="400">Title</th>
              <th>Genre</th>
            </tr>
            </thead>
            <tbody>
            {
              this.props.viewer.movieList.map((item, index) =>
                <tr key={index}>
                  <td>
                    {item.title}
                  </td>
                  <td>
                    {
                      item.genres.map(g => capitalize(g)).join(', ')
                    }
                  </td>
                </tr>)
            }
            </tbody>
          </table>
        </div>
      </div>);
  }
}


Home = Relay.createContainer(Home, {
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

export default Home;