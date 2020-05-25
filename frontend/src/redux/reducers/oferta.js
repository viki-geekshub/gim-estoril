
import {
    GET_ALL_OFERTAS,
 

} from "../types";

const initialState = {

    ofertas: [],
    error: null,
    loading: false

}

export default function (state = initialState, action) {

    switch(action.type){

        case GET_ALL_OFERTAS:
            return {
                ...state,
                ofertas: action.payload
        }
       
        default :
        return state;
    }
}