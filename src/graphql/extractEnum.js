import data from '../common/repository/data.json';
import {union, sortBy} from 'lodash';

/*
* This is a throw-away helper class used to extract enums from data.json. Used once to get all unique genres
* and classifications. In reality, the data should be stored in a database by a separate, async, scheduled process.
* This process should perform validation on the data before committing it to the database.
*
* However for the purposes of this demo, this simple script suffices.
* */
let uniqueGenres = [];
let uniqueClassifications = [];
data.forEach(d => {
  uniqueGenres = union(uniqueGenres, d.genres);
  uniqueClassifications = union(uniqueClassifications, [d.classification]);
});

uniqueGenres = sortBy(uniqueGenres);
uniqueClassifications = sortBy(uniqueClassifications);

console.log(`Unique genres count ${uniqueGenres.length}, looks like ${JSON.stringify(uniqueGenres)}`);
console.log(`Unique classifications count ${uniqueClassifications.length}, looks like ${JSON.stringify(uniqueClassifications)}`);
