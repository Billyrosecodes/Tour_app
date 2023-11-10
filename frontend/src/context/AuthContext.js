import {createContext, useEffect, useReducer} from 'react';

const initial_state ={
    user: null,
    loading: false,
    error: null,
}

export const AuthContext = createContext(initial_state);

const AuthReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_START":
            return {
                user:null,
                loading: false,
                error: null,
            };
    case 'LOGIN_SUCCESS' :
        return{
            user: action.payload,
            loading: false,
            error: null
        }
        default:
    
    }
}