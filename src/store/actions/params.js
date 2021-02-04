import { GET_PARAMS, ADD_PARAM } from './types';

export const getParams = (params) => (dispatch) => {
  dispatch({
    type: GET_PARAMS,
    payload: params,
  });
};

export const addParam = (query) => (dispatch) => {
  dispatch({
    type: ADD_PARAM,
    payload: query,
  });
};
