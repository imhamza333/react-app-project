import{
    GET_TECH,
    ADD_TECH,
    DELETE_TECH,
    SET_LOADING,
    TECHS_ERROR,
    GET_TECHS
} from "./types";

// Get Tech from Server

export const getTechs = () => async dispatch => {
    try{  
        setLoading();

        const res = await fetch("/techs");
        const data = await res.json(); 

        dispatch({
            type: GET_TECHS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: TECHS_ERROR,
            payload: err.response.statusText
        })
    }
}

// Add Technician to server

export const addTech = (tech) => async dispatch => {
    try{  
        setLoading();

        const res = await fetch("/techs", {
            method: "POST",
            body: JSON.stringify(tech),
            headers: {
                "Content-Type" : "application/json"
            }
        });
        const data = await res.json(); 

        dispatch({
            type: GET_TECHS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: ADD_TECH,
            payload: err.response.statusText
        })
    }
}

// Set Loading to true

export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}