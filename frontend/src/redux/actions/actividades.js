import {
    GET_ALL_ACTIVIDADES,
} from "../types";

import axios from 'axios';
import store from '../store'

export const getAllActividades = async() => {
    const token = localStorage.getItem('authToken');
    const res = await axios.get('http://localhost:3001/activities', {
        headers: {
            Authorization: token
        }
    });
    console.log(res.data)
    store.dispatch({ // No se puede interactuar de forma directa con el store por buenas prácticas y por eso dispachamos la acción a través del reducer. Dispachar es pasarle una orden al reducer
        type: GET_ALL_ACTIVIDADES,
        payload: res.data
    })
    return res;
}








