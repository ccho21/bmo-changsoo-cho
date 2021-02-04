import React, { Fragment, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  getCategories,
  getCuisines,
  getCollections,
} from 'store/actions/options';

import { refineRestaurants } from 'store/actions/restaurants';

const RefineSearch = ({
  options: { categories, cuisines, collections },
  getCategories,
  getCuisines,
  getCollections,
  refineRestaurants,
  city: { city },
}) => {
  const [formData, setFormData] = useState({
    category: '',
    cuisines: '',
    collection_id: '',
    q: '',
  });
  useEffect(() => {
    if (city) {
      getCategories();
      getCuisines();
      getCollections();
    }
  }, [getCategories, getCuisines, getCollections, city]);
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const params = formData;
    console.log('### on submit', params);
    refineRestaurants(params);
  };
  return (
    <Fragment>
      <div className='container'>
        <div className='grid'>
          <div className='grid_item'>
            <h1 class='main-font-1'>Find your favorite restaurants with filters.</h1>
            <p>Please click logo if you want to search another city</p>
          </div>
        </div>
        <form onSubmit={onSubmit}>
          <div className='grid'>
            <div className='grid_item grid_item-md-span-4'>
              <select
                className='b-form b-form-select'
                name='category'
                onChange={onChange}
              >
                <option selected disabled>
                  Choose categories
                </option>
                {categories.map((cur) => (
                  <option value={cur.categories.id} key={cur.categories.id}>
                    {cur.categories.name}
                  </option>
                ))}
              </select>
            </div>
            <div className='grid_item grid_item-md-span-4'>
              <select
                className='b-form b-form-select'
                name='cuisines'
                onChange={onChange}
              >
                <option selected>Choose cuisines</option>
                {cuisines ? (
                  cuisines.map((cur) => (
                    <option value={cur.cuisine.cuisine_id} key={cur.cuisine.cuisine_id}>
                      {cur.cuisine.cuisine_name}
                    </option>
                  ))
                ) : (
                  <option></option>
                )}
              </select>
            </div>
            <div className='grid_item grid_item-md-span-4 pr-0'>
              <select
                className='b-form b-form-select'
                name='collection_id'
                onChange={onChange}
              >
                <option selected>Choose Collection</option>
                {collections.map((cur) => (
                  <option value={cur.collection.collection_id} key={cur.collection.collection_id}>
                    {cur.collection.title}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className='grid'>
            <div class='grid_item grid_item-md-span-12'>
              <div className='search-group'>
                <input
                  type='text'
                  className='b-form'
                  placeholder='Enter keyword to find the best restaurants'
                  aria-label='Enter keyword'
                  aria-describedby='search-city'
                  name='q'
                  value={formData.q}
                  onChange={(e) => onChange(e)}
                />
                <div className=''>
                  <button className='b-form-btn' type='submit'>
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

RefineSearch.propTypes = {
  options: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
  getCategories: PropTypes.func.isRequired,
  getCuisines: PropTypes.func.isRequired,
  getCollections: PropTypes.func.isRequired,
  refineRestaurants: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  options: state.options,
  city: state.city,
});
export default connect(mapStateToProps, {
  getCategories,
  getCuisines,
  getCollections,
  refineRestaurants,
})(withRouter(RefineSearch));
