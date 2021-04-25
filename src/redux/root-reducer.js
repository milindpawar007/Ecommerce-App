import { combineReducers } from 'redux'

import UserReducer from './user/user.reducer.jsx'

export default combineReducers  ({
     user :UserReducer
})