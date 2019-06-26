import { ADVERT_FETCHED } from "../actions/adverts";

export default function (state = [], action = {}) {
    switch (action.type) {
        case ADVERT_FETCHED:
        return action.advert
       

    default:
        return state
    }
}