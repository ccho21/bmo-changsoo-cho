import axios from 'axios';
import { setAlert } from './alert';
import { getParams, addParam } from './params';
import { GET_RESTAURANTS, RESTAURANT_ERROR, GET_CITY } from './types';

// SEARCH POSTS
export const searchCity = (c, history) => async (dispatch) => {
  try {
    const cityParam = { query: c };
    const cityRes = await axios.get('/locations', {
      params: cityParam,
    });

    // Got city name and entity_id;
    const city = cityRes.data.location_suggestions.length
      ? cityRes.data.location_suggestions[0]
      : null;
    if (city) {
      console.log('### city', city);
      const { entity_id, entity_type, latitude, longitude} = city;
      // CAll SEARCH API
      const params = { entity_id, entity_type, lat: latitude, lon: longitude };
      const restaurantsRes = await axios.get('search', {
        params,
      });

      // store params
      dispatch(getParams(params));

      dispatch({
        type: GET_CITY,
        payload: city,
        loading: false,
      });

      dispatch({
        type: GET_RESTAURANTS,
        payload: restaurantsRes.data.restaurants,
        loading: false,
      });

      let query = `?&query=${c}`;
      history.push({ pathname: '/results', search: query });
    } else {
      // IF CITY IS NOT FOUND, PLEASE LET USER TRY IT AGAIN
      dispatch(
        setAlert(
          'Could not find any results with this keyword. Please try it again',
          'Success'
        )
      );
    }
  } catch (err) {
    dispatch({
      type: RESTAURANT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const refineRestaurants = (params) => async (dispatch, getState) => {
  try {
    const existingParams = { ...getState().params.params };
    const searchParams = { ...existingParams, ...params };
    // CAll SEARCH API
    console.log('### search params', searchParams);
    const restaurantsRes = await axios.get('search', {
      params: searchParams,
    });

    // store params
    dispatch(getParams(searchParams));

    dispatch({
      type: GET_RESTAURANTS,
      payload: restaurantsRes.data.restaurants,
      loading: false,
    });
  } catch (err) {
    dispatch({
      type: RESTAURANT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const sortRestaurants = (name, value) => async (dispatch, getState) => {
  try {
    // CAll SEARCH API
    const params = { ...getState().params.params };
    const param = { [name]: value };
    const sortParam = { ...params, ...param };
    const res = await axios.get('search', {
      params: sortParam,
    });

    // store params
    dispatch(addParam(param));

    dispatch({
      type: GET_RESTAURANTS,
      payload: res.data.restaurants,
      loading: false,
    });
  } catch (err) {
    dispatch({
      type: RESTAURANT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
