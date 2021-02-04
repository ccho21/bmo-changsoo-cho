import {
  GET_RESTAURANTS,
  RESTAURANT_ERROR,
} from 'store/actions/types';

const initialState = {
  restaurants: [],
  categories: [],
  restaurant: null,
  loading: true,
  error: {},
};
const Restaurant = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_RESTAURANTS:
      return {
        ...state,
        restaurants: [...payload],
        loading: false,
      };
    case RESTAURANT_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    default: {
      return state;
    }
  }
};
export default Restaurant;
