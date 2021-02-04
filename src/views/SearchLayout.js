import React, { Fragment } from 'react';

import Search from 'components/search/Search';
import Alert from 'components/alert/Alert';

import './SearchLayout.scss';
const Landing = () => {
  return (
    <Fragment>
      <a href='#main' className='skip-link'>
        Skip to the main content
      </a>
      <div className='search-bg'>
        <div className='search-container'>
          <div className='search-box'>
            <div className='grid'>
              <div className='grid_item grid_item-xs-span-12'>
                <h1 className='main-font-1'>
                  What are you craving? <br />
                  Search Cities for restaurants.
                </h1>
              </div>
            </div>
            <Alert />
            <main role='main' id='main'>
              <Search />
            </main>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Landing;
