import React from 'react';

/*
 * Animated loader using css for those slow rpc calls
 * */
export default () =>
  <div>
    <span className="Loader">
      <div className="Loader-indicator">
          <h1>
              <span>Loading</span>
          <span className="Loader-ellipsis">
            <span className="Loader-ellipsisDot">.</span>
            <span className="Loader-ellipsisDot">.</span>
            <span className="Loader-ellipsisDot">.</span>
          </span>
          </h1>
      </div>
    </span>
  </div>;
