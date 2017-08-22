import { FETCH_SURVEYS } from '../actions/types';

const DEFAULT_STATE = [];

export default function(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case FETCH_SURVEYS:
      return action.payload;
    default:
      return state;
  }
}
