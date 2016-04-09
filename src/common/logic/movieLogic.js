import {groupBy, sortBy, meanBy, includes, uniqBy} from 'lodash';
import {getMoviesRepository} from '../repository/movieRepository';

/*
 * All methods here must return a promise because relay consumes these methods.
 * */

const validClassifications = ['Unclassified', 'G','PG','PG-13','R'];

// Returns a promise which when resolves returns all movies for a given genre sorted by name.
// If genre is not specified, return all movies sorted by name.
// This method also sanitises erroneous classifications which are set to 'Unclassified'.
// This method also removes duplicates.
export const getMoviesLogic = (genre) => {
  return new Promise((resolve, reject) => {
    let movies = getMoviesRepository(genre);

    // Remove duplicates
    movies = uniqBy(movies, 'title');

    // Sanitise erroneous classifications and perform de-duplication and log it
    movies.forEach(m => {
      if (!includes(validClassifications, m.classification)) {
        console.warn(`Invalid classification detected for movie ${m.title}, classification: ${m.classification}. Setting to 'Unclassified'`);
        m.classification = 'Unclassified';
      }
    });

    // return sorted by title
    resolve(sortBy(movies, 'title'));
  });
};