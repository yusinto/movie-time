import {expect} from 'chai';
import {filter, find} from 'lodash';
import {getMoviesLogic} from '../../../common/logic/movieLogic';

describe('Movie Logic Tests', () => {

  it('should return all movies if no genre is specified', () => {
    // arrange

    // act
    const promise = getMoviesLogic();

    // assert
    return promise.should.be.fulfilled.then(result => {
      expect(result.length).to.equal(96);
      expect(result[0]).to.eql({
        "rating": 8.1,
        "genres": [
          "Biography",
          "Drama"
        ],
        "classification": "PG-13",
        "language": [
          "English"
        ],
        "title": "A Beautiful Mind"
      });
    });
  });

  it('should remove duplicates', () => {
    // arrange

    // act
    const promise = getMoviesLogic('action');

    // assert
    return promise.should.be.fulfilled.then(result => {
      expect(result.length).to.equal(39);
      const filteredArray = filter(result, ['title', 'Batman Begins']);
      expect(filteredArray.length).to.equal(1);
    });
  });

  it('should set erroneous classifications to Unclassified', () => {
    // arrange

    // act
    const promise = getMoviesLogic('action');

    // assert
    return promise.should.be.fulfilled.then(result => {
      expect(result.length).to.equal(39);
      const bourneSupremacy = find(result, ['title', 'The Bourne Supremacy']);
      expect(bourneSupremacy.classification).to.equal('Unclassified');
    });
  });
});
