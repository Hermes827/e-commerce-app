import { GET_INFO } from '../actions/index.js';

const initialState = {
  currentUser: {}
}

export function reducer(state = initialState, action) {
  // console.log('reducer', state, action);
  switch(action.type){

    case GET_INFO:
      return Object.assign({}, state, {
        currentUser: action.payload.arg
      });

  // case GET_COOKIE:
  //   console.log("get cookie")
  //   return Object.assign({}, state, {
  //     cookie: action.payload.arg
  //   });

    default:
      return state
  }
}
