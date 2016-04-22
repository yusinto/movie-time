import {expect} from 'chai';
import Relay from 'react-relay';
import React, {Component} from 'react';
import {renderIntoDocument, findRenderedDOMComponentWithClass, scryRenderedDOMComponentsWithTag, Simulate} from 'react-addons-test-utils';
import HomeContainer from '../../../../src/common/container/homeContainer';
import HomeComponent from '../../../../src/common/component/homeComponent';
import ReactTestUtils from 'react-addons-test-utils';
import RelayTestUtils from '../../relayTestUtils';

describe('Home Component Tests', () => {
  it('requires a Container prop', () => {
    class MockRoute extends Relay.Route {
    }
    MockRoute.routeName = 'MockRoute';
    MockRoute.path = '/jest';

    const queryConfig = MockRoute;
    const environment = new Relay.Environment();
    //const shallowRenderer = ReactTestUtils.createRenderer();
    const relayRenderer = RelayTestUtils.createRenderer();

    //function someMethod(mockGenerator) {
    //  return <HomeContainer viewer={mockGenerator('42')} />
    //}
    //
    //relayRenderer.render(someMethod, environment, queryConfig);
    //
    //someMethod(dataID => new MockPointer(dataID));

    class MockPointer {
      constructor(dataID) {
        this.dataID = dataID;
      }
    }

    relayRenderer.render(<HomeContainer viewer={new MockPointer('42')} />,
      environment,
      queryConfig);

    //shallowRenderer.render(
    //  <Relay.Renderer queryConfig={queryConfig} environment={environment}/>
    //);
    //
    //const output = shallowRenderer.getRenderOutput();
    //expect(output.type).to.equal('div');

    //expect(() => ShallowRenderer.render(
    //  <Relay.Renderer queryConfig={queryConfig} environment={environment} />
    //)).toThrowError(
    //  'Warning: Failed propType: Required prop `Container` was not specified in `RelayRenderer`.'
    //);
    //
    //ShallowRenderer.render(
    //  <Relay.Renderer
    //    Container={HomeComponent}
    //    queryConfig={queryConfig}
    //    environment={environment}
    //  />
    //)).toThrowError(
    //  'Warning: Failed propType: Invalid prop `Container` supplied to `RelayRenderer`, expected a RelayContainer.'
    //);
  });

  //it('should render correctly', () => {
  //  const mockProps = {
  //    viewer: {
  //      movieList: [],
  //      allGenres: [
  //        'action',
  //        'adventure',
  //        'drama'
  //      ]
  //    },
  //    relay: {
  //      variables: {
  //        genre: 'Drama'
  //      }
  //    }
  //  };
  //
  //  const homeContainer = renderIntoDocument(<ContainerSuperClass />);
  //  const paragraphElement = findRenderedDOMComponentWithClass(homeContainer, 'header-summary');
  //  expect(paragraphElement.textContent).to.equal('Found no movies under Drama');
  //});
});