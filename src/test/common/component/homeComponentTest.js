import {expect} from 'chai';
import Relay from 'react-relay';
import React, {Component} from 'react';
import {renderIntoDocument, findRenderedDOMComponentWithClass, scryRenderedDOMComponentsWithTag, Simulate} from 'react-addons-test-utils';
import HomeContainer from '../../../../src/common/container/homeContainer';

/*
 typeof environment === 'object' &&
 environment !== null &&
 typeof environment.forceFetch === 'function' &&
 typeof environment.getFragmentResolver === 'function' &&
 typeof environment.getStoreData === 'function' &&
 typeof environment.primeCache === 'function'
 * */
class ContainerSuperClass extends Component {
  // Required so we can implement getChildContext
  static childContextTypes = {
    relay: Relay.PropTypes.Environment,
    route: Relay.PropTypes.QueryConfig.isRequired
  };

  /**
   * TODO:
   RelayRoute.genMock = jest.fn(() => {
  class MockRoute extends RelayRoute {}
  MockRoute.routeName = 'MockRoute';
  MockRoute.path = '/jest';
  return MockRoute;
});
   * @returns {{relay: {forceFetch: relay.forceFetch, getFragmentResolver: relay.getFragmentResolver, getStoreData: relay.getStoreData, primeCache: relay.primeCache}, route: {routeName: string, path: string}}}
   */
  getChildContext() {
    return {
      relay: {
        forceFetch: () => {
        },
        getFragmentResolver: () => {
        },
        getStoreData: () => {
        },
        primeCache: () => {
        }
      },
      route: {
        routeName: 'test-route-name',
        path: '/test-path'
      }
    }
  }

  render() {
    return <HomeContainer />;
  }
}

describe('Home Component Tests', () => {
  it('should render correctly', () => {
    const mockProps = {
      viewer: {
        movieList: [],
        allGenres: [
          'action',
          'adventure',
          'drama'
        ]
      },
      relay: {
        variables: {
          genre: 'Drama'
        }
      }
    };

    const homeContainer = renderIntoDocument(<ContainerSuperClass />);
    const paragraphElement = findRenderedDOMComponentWithClass(homeContainer, 'header-summary');
    expect(paragraphElement.textContent).to.equal('Found no movies under Drama');
  });
});