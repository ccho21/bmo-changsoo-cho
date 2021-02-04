import axios from 'axios';
import {
  GET_CATEGORIES,
  GET_CUISINES,
  GET_COLLECTIONS,
  OPTIONS_ERROR,
} from './types';
export const getCategories = () => async (dispatch) => {
  try {
    // CAll SEARCH API
    const res = await axios.get('categories');
    console.log('### categories', res);
    dispatch({
      type: GET_CATEGORIES,
      payload: res.data.categories,
    });
  } catch (err) {
    dispatch({
      type: OPTIONS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const getCuisines = () => async (dispatch, getState) => {
  try {
    // CAll SEARCH API
    const { city_id } = getState().city.city;
    const res = await axios.get('cuisines', {
      params: {
        city_id: city_id,
      },
    });
    console.log('### cuisines', res);
    dispatch({
      type: GET_CUISINES,
      payload: res.data.cuisines,
    });
  } catch (err) {
    dispatch({
      type: OPTIONS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const getCollections = () => async (dispatch, getState) => {
  try {
    // CAll SEARCH API
    const { city_id } = getState().city.city;
    const res = await axios.get('collections', {
      params: {
        city_id: city_id,
      },
    });
    console.log('### collections', res);
    dispatch({
      type: GET_COLLECTIONS,
      payload: res.data.collections,
    });
  } catch (err) {
    dispatch({
      type: OPTIONS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
