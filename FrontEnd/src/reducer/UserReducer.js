import {
  SAVE_DATA,
  SEARCH_DATA,
  FETCH_DATA,
  FETCH_COMPLETE,
} from './Action'

const defaulFormValue={
  id:'',
  name: '',
  birth_date:'',
  identity_number:'',
  profession:'',
  education:'',
};

const initialState={
  users:[],
  form:{ ...defaulFormValue},
  disabled: false,
  isLoading: false,
  search: '',
  totalPages:0,
}

export default function UserReducer(state=initialState,action) {
  const {type, payload}= action;

  switch (type) {
    case SAVE_DATA:
      return{ ...state, users: state.users.concat([ { ...payload } ])};
    case SEARCH_DATA:
      return{ ...state, seacrh: payload};
    case FETCH_COMPLETE:
      return{ ...state, users: [ ...payload], isLoading: false};
    case FETCH_DATA:
      return{ ...state, isLoading: true};
    default:
      return{ ...state};
  }
}
