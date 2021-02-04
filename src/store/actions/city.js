// import axios from 'axios';
// import { GET_CITY, CITY_ERROR } from './types';

// SEARCH POSTS
// export const getCity = () => async (dispatch) => {
//   const config = {
//     headers: {
//       'Content-Type': 'application/json',
//       'user-key': process.env.REACT_APP_API_KEY,
//     },
//   };
//   try {
//     const res = await axios.get(
//       '/locations',
//       config,
//       { params: { query: '' } },
//     );
//     console.log('### res', res);
//     dispatch({
//         type: GET_CITY,
//         payload: res.data
//     })
//     return res.data;
//   } catch (err) {
//     dispatch({
//         type: CITY_ERROR,
//         payload: { msg: err.response.statusText, status: err.response.status }
//     })
//     return null;
//   }
// };
// SEARCH CITY
