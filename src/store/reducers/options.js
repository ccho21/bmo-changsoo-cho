import {
  GET_CATEGORIES,
  GET_COLLECTIONS,
  GET_CUISINES,
  OPTIONS_ERROR,
} from 'store/actions/types';

const initialState = {
  categories: [],
  collections: [],
  error: {},
};
const Options = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: [...payload],
        loading: false,
      };
    case GET_CUISINES:
      return {
        ...state,
        cuisines: [...payload],
        loading: false,
      };
    case GET_COLLECTIONS:
      return {
        ...state,
        collections: [...payload],
        loading: false,
      };
    case OPTIONS_ERROR:
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
export default Options;
