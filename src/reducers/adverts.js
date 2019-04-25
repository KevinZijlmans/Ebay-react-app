import { ADVERTS_FETCHED, ADVERT_CREATE_SUCCESS } from "../actions/adverts";

const reducer = (state = [], action = {}) => {
  console.log('action test:', action)

  switch (action.type) {
    case ADVERTS_FETCHED:
      return action.adverts

    case ADVERT_CREATE_SUCCESS:
      const newState = [...state, action.advert]
      console.log('newState test:', newState)
      return newState
      
    default:
      return state
  }
}

export default reducer