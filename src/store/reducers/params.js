import { GET_PARAMS, ADD_PARAM } from 'store/actions/types';

// city name, city address, city area  will be stored
const initialState = {
  params: null,
};
const Params = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PARAMS:
      return {
        ...state,
        params: payload,
      };
    case ADD_PARAM:
      return {
        ...state,
        params: { ...state.params, ...payload },
      };
    default: {
      return state;
    }
  }
};
export default Params;
