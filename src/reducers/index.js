import {combineReducers} from 'redux'
import adverts from './adverts'
import advert from './advert'
import comments from './comments'

export default combineReducers({
    adverts,
    advert,
    comments
})