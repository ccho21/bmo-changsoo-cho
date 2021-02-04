import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { searchCity } from 'store/actions/restaurants';


const Search = ({ searchCity, history }) => {
  useEffect(() => {}, []);

  const [formData, setFormData] = useState({
    city: '',
  });
  const { city } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (city) {
      const sanitizedCity = city.trim();
      searchCity(sanitizedCity, history);
    }
  };
  return (
    <Fragment>
      <div className='container'>
        <div className='grid'>
          <div className='grid_item grid_item-md-span-12'>
            <form onSubmit={onSubmit}>
              <div className='search-group'>
                <input
                  type='text'
                  className='b-form'
                  placeholder='Search Cities'
                  aria-label='Search cities'
                  aria-required="true"
                  aria-describedby='search-city'
                  name='city'
                  value={city}
                  onChange={(e) => onChange(e)}
                />
                <div className=''>
                  <button className='b-form-btn' type='submit'>
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default connect(null, { searchCity })(withRouter(Search));
