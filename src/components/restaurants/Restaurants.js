import React, { Fragment, useEffect } from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from 'components/spinner/Spinner';

import Restaurant from './Restaurant';
import { sortRestaurants } from 'store/actions/restaurants';

const Restaurants = ({
  restaurants: { restaurants, loading },
  sortRestaurants,
}) => {
  useEffect(() => {}, []);

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log('### name value', name, value);
    sortRestaurants(name, value);
  };
  return (
    <div className='restaurants'>
      <section>
        <Fragment>
          {loading ? (
            <Spinner />
          ) : (
            <Fragment>
              <div className='grid flex-end'>
                <div className='grid_item grid_item-md-span-2'>
                  <select
                    className='b-form b-form-select'
                    name='sort'
                    onChange={onChange}
                  >
                    <option selected>Sort By</option>
                    <option value='cost'>Cost</option>
                    <option value='rating'>Rating</option>
                    <option value='real_distance'>Distance</option>
                  </select>
                </div>
                <div className='grid_item grid_item-md-span-2'>
                  <select
                    className='b-form b-form-select'
                    name='order'
                    onChange={onChange}
                  >
                    <option selected>Order By</option>
                    <option value='asc'>Asc</option>
                    <option value='desc'>Desc</option>
                  </select>
                </div>
              </div>
              <div className='grid'>
                <div className='grid_item grid_item-xs-span-12'>
                  {restaurants.map((cur) => (
                    <Restaurant
                      key={cur.restaurant.id}
                      restaurant={cur.restaurant}
                    />
                  ))}
                </div>
              </div>
            </Fragment>
          )}
        </Fragment>
      </section>
    </div>
  );
};

Restaurants.propTypes = {
  restaurants: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  restaurants: state.restaurants,
});

// connect returns higher order components
export default connect(mapStateToProps, { sortRestaurants })(Restaurants);
