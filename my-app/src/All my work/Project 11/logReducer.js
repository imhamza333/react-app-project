import {
    SET_LOADING, 
    LOGS_ERROR, 
    GET_LOGS, 
    ADD_LOG, 
    DELETE_LOG,
    UPDATE_LOG,
    CLEAR_CURRENT,
    SET_CURRENT,
    SEARCH_LOGS
 } from "./types";

const initialState = {
    logs: null,
    current: null,
    loading: false,
    error: null
};

export default (state = initialState, action) =>{
    switch(action.type){
        case GET_LOGS:
            return {
                ...state,
                logs: action.payload,
                loading: false
            }
        case ADD_LOG:
            return{
                ...state,
                logs: [...state.logs, action.payload],
                loading: false
            };
            
        case DELETE_LOG:
            return{
                ...state,
                logs: state.logs.filter(log => log.id !== action.payload),
                loading: false
            }
        case SEARCH_LOGS:
            return{
                ...state,
                logs: action.payload
            };    

        case UPDATE_LOG:
            return{
                ...state,
                logs: state.logs.map(log =>
                    log.id === action.payload.id ? action.payload : log

                )
            };    
            
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            }
        
        case CLEAR_CURRENT:
            return {
                ...state,
                current: null
            }
            
        case SET_LOADING:
        return{
            ...state,
            loading: true
        };
        case LOGS_ERROR:
            console.error(action.payload) 
        return  {
            ...state,
            error: action.payload
        }
        default:
            return state;
    }
}