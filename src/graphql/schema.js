import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLInt,
  GraphQLFloat,
  GraphQLBoolean,
  GraphQLEnumType
} from 'graphql';
import {getMoviesLogic} from '../common/logic/movieLogic';

/*
 * This is our graphql type system. It consumes methods from the logic module to resolve data.
 * */

// Movie genres ["Action","Adventure","Animation","Biography","Comedy","Crime","Drama","Family","Fantasy","History","Music","Musical","Mystery","Romance","Sci-Fi","Thriller","War","Western"]
const genreEnum = new GraphQLEnumType({
  name: 'Genre',
  values: {
    ACTION: {
      value: 'Action'
    },
    ADVENTURE: {
      value: 'Adventure'
    },
    ANIMATION: {
      value: 'Animation'
    },
    BIOGRAPHY: {
      value: 'Biography'
    },
    COMEDY: {
      value: 'Comedy'
    },
    CRIME: {
      value: 'Crime'
    },
    DRAMA: {
      value: 'Drama'
    },
    FAMILY: {
      value: 'Family'
    },
    FANTASY: {
      value: 'Fantasy'
    },
    HISTORY: {
      value: 'History'
    },
    MUSIC: {
      value: 'Music'
    },
    MUSICAL: {
      value: 'Musical'
    },
    MYSTERY: {
      value: 'Mystery'
    },
    ROMANCE: {
      value: 'Romance'
    },
    SCIFI: {
      value: 'Sci-Fi'
    },
    THRILLER: {
      value: 'Thriller'
    },
    WAR: {
      value: 'War'
    },
    WESTERN: {
      value: 'Western'
    }
  }
});

// Classification information obtained from https://en.wikipedia.org/wiki/Motion_Picture_Association_of_America_film_rating_system
const classificationEnum = new GraphQLEnumType({
  name: 'Classification',
  description: 'One of the classification categories assigned by the government or film association',
  values: {
    UNCLASSIFIED: {
      value: 'Unclassified',
      description: 'Not classified or unknown classification.'
    },
    GENERAL: {
      value: 'G',
      description: 'All ages admitted. Nothing that would offend parents for viewing by children.'
    },
    PARENTAL_GUIDANCE: {
      value: 'PG',
      description: 'Some material may not be suitable for children. Parents urged to give "parental guidance". May contain some material parents might not like for their young children.'
    },
    PARENTAL_GUIDANCE_13: {
      value: 'PG-13',
      description: 'Some material may be inappropriate for children under 13. Parents are urged to be cautious. Some material may be inappropriate for pre-teenagers.'
    },
    RESTRICTED: {
      value: 'R',
      description: 'Under 17 requires accompanying parent or adult guardian. Contains some adult material. Parents are urged to learn more about the film before taking their young children with them.'
    }
  }
});

const movie = new GraphQLObjectType({
  name: 'Movie',
  fields: {
    rating: {
      type: GraphQLFloat
    },
    genres: {
      type: new GraphQLList(genreEnum)
    },
    classification: {
      type: classificationEnum
    },
    languages: {
      type: new GraphQLList(GraphQLString)
    },
    title: {
      type: GraphQLString
    }
  }
});

const movieList = new GraphQLObjectType({
  name: 'MovieList',
  fields: {
    items: {
      type: new GraphQLList(movie),
      args: {
        genre: {type: GraphQLString}
      },
      resolve: (obj, {genre}) => getMoviesLogic(genre)
    },
    allGenres: {
      type: new GraphQLList(GraphQLString),
      resolve: () => genreEnum._values.map(e => e.value.toLowerCase())
    }
  }
});

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    movieList: {
      type: movieList,
      args: {
        genre: {type: GraphQLString}
      },
      resolve: () => []
    }
  }
});

const schema = new GraphQLSchema({query: queryType});
export default schema;