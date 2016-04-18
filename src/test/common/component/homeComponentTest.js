import {expect} from 'chai';
import React from 'react';
import {renderIntoDocument, findRenderedDOMComponentWithClass, scryRenderedDOMComponentsWithTag, Simulate} from 'react-addons-test-utils';
import HomeComponent from '../../../../src/common/component/homeComponent';

describe('Home Component Tests', () => {
    it('should render correctly', () => {
        const mockProps = {
            viewer: {
                movieList: [

                ],
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
        const homeComponent = renderIntoDocument(<HomeComponent {...mockProps} />);
        const paragraphElement = findRenderedDOMComponentWithClass(homeComponent, 'header-summary');
        expect(paragraphElement.textContent).to.equal('Found no movies under Drama');
    });
});