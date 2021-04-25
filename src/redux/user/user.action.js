import { userAtcionType}from './user.types.js'
export const setCurrentUser =user =>({

    type:userAtcionType.SET_CURRENT_USER,
    payload:user

})