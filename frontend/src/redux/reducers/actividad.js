import {
    GET_ALL_ACTIVIDADES,
} from "../types";

const initialState = {
    actividades: [],
    error: null,
    loading: false
}
// el reducer no muta el estado sino que crea un nuevo estado con una nueva informacion actualizada. Por eso se hace asi para mantener las buenas prácticas
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
