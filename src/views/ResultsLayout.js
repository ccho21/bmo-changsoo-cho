import React, { Fragment, useEffect, useState } from 'react';
import { withRouter, Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import RefineSearch from 'components/search/RefineSearch';
import Restaurants from 'components/restaurants/Restaurants';

import { searchCity } from 'store/actions/restaurants';
import logo from 'assets/img/bmo_harris_logo.png';

const ResultsLayout = ({ params, history, searchCity, location }) => {
  const [isRefreshed, setIsRefreshed] = useState(false);
  useEffect(() => {
    // CHECK IF PARAM EXISTS
    if (!params.params) {
      const urlQuery = location.search;

      // CHECK IF URL HAS QUERY
      if (!urlQuery) {
        setIsRefreshed(true);
      }

      // IF IS QUERY PARAMS ON THE URL
      const query = new URLSearchParams(urlQuery);
      const city = query.get('query');
      searchCity(city, history);
    }
  }, [params, isRefreshed, location, searchCity, history]);

  // REDIRECT IF NOT SEARCHED
  if (isRefreshed) {
    return <Redirect to='/' />;
  }
  return (
    <Fragment>
      <a href='#result' className='skip-link'>
        Skip to the main content
      </a>
      <div className='container'>
        <div class='text-center'>
          <Link to='/'>
            <img class='logo' src={logo} alt='bmo logo' />
          </Link>
        </div>
        <RefineSearch />
        <main role='main' id="result">
          <Restaurants />
        </main>
      </div>
    </Fragment>
  );
};

ResultsLayout.propTypes = {
  searchCity: PropTypes.func.isRequired,
  params: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  params: state.params,
});

export default connect(mapStateToProps, { searchCity })(
  withRouter(ResultsLayout)
);
