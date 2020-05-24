
import {
    GET_ALL_ACTIVIDADES,
 

} from "../types";

const initialState = {

    actividades: [],
    error: null,
    loading: false

}

export default function (state = initialState, action) {

    switch(action.type){

        case GET_ALL_ACTIVIDADES:
            return {
                ...state,
                actividades: action.payload
        }
       
        default :
        return state;
    }
}
