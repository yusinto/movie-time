import data from './data.json';
import {filter, find} from 'lodash';

/*
 * This is a mock repository module. In production, this will be our integration point with the database.
 * */

// Given a genre, return all movies belonging to that genre (sort of mocking our stored procedure call)
export const getMoviesRepository = genre => {
  genre = genre.toLowerCase();

  // if genre is not specified, return all movies
  if(!genre || genre === 'all') {
    return data;
  }

  return filter(data, d => find(d.genres, g => g.toLowerCase() === genre));
};