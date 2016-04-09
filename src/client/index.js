// Import the render method from react-dom so we can mount our
// component onto an html element
import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { RelayRouter } from 'react-router-relay';
import Routes from '../common/route';
import '../style/main.sass';

// This is the entry point into our react app on the client side
render(<RelayRouter history={browserHistory} routes={Routes} />, document.getElementById('reactDiv'));

