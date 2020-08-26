import { GET_COOKIE } from '../actions/index.js';
import { DISCARD_COOKIE } from '../actions/index.js';

const initialState = {
  cookie: null
  // currentUser: {},
  // updates: [],
  // chosenMail: {}
}

export function reducer(state = initialState, action) {
  // console.log('reducer', state, action);
  switch(action.type){

  case GET_COOKIE:
    console.log("get cookie")
    return Object.assign({}, state, {
      cookie: action.payload.arg
    });

    case DISCARD_COOKIE:
      console.log("no cookie")
      return Object.assign({}, state, {
        cookie: null
      });
  //
  // case GET_UPDATES:
  //   return Object.assign({}, state, {
  //     updates: action.payload.arg
  //   });
  //
  // case GET_CHOSENMAIL:
  //   return Object.assign({}, state, {
  //     chosenMail: action.payload.arg
  //   });

    default:
      return state
  }
}
