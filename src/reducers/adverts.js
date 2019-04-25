import { ADVERTS_FETCHED, ADVERT_CREATE_SUCCESS } from "../actions/adverts";

const reducer = (state = [], action = {}) => {

  switch (action.type) {
    case ADVERTS_FETCHED:
      return action.adverts

    case ADVERT_CREATE_SUCCESS:
      const newState = [...state, action.advert]
      return newState
      
    default:
      return state
  }
}

export default reducer