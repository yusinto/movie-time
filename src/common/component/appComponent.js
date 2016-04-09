/*
 Import react's default module and assign it to a variable named React.
 Additionally we also import the Component module and assign it to a
 variable named Component.
 */
import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

/*
 Subclass React.Component and implement the render method. This method
 must return a single child element. A react component at minimum must
 implement the render method. Also set this class as the default export
 of this file so we can import it in other files.
 */
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
  };

  render() {
    return (
      <div className="app-root">
        <div className="header">
          <div className="logo">
            <Link to="/"><img src="/images/logo.png"/></Link>
          </div>
          <div className="menu-container">
            <div className="top-bar">
              <div className="top-bar-left">
                <ul className="menu">
                  {
                    this.props.location.pathname === '/' || this.props.location.pathname.startsWith('/home') ?
                      <li className="active menu-text"><span>Home</span></li>
                      :
                      <li><Link to="/">Home</Link></li>
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="body">
          {this.props.children}
        </div>
      </div>
    );
  }
}