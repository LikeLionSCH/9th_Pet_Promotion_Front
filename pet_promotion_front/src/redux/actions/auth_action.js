import { SET_AUTH_USER } from './types'; 

export function setCurrentAuth(currentAuth){
    return {
        type: SET_AUTH_USER,
        payload: currentAuth
    }
}