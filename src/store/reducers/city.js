import {
  GET_CITY,
  CITY_ERROR
} from 'store/actions/types';

// city name, city address, city area  will be stored
const initialState = {
  city: null, 
  loading: true,
  error: {},
};
const City = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_CITY:
      return {
        ...state,
        city: payload,
        loading: false,
      };
      case CITY_ERROR:
        return {
          ...state,
          city: payload,
          loading: false,
        };
    default: {
      return state;
    }
  }
};
export default City;
