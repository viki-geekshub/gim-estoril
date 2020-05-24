import {
    GET_ALL_ACTIVIDADES,
  
} from "../types";

import axios from 'axios';
import store from '../store'

export const getAllActividades = async() => {
    const token = localStorage.getItem('authToken');
    const res = await axios.get('/actividad', {
        headers: {
            Authorization: token
        }
    });
    store.dispatch({
        type: GET_ALL_ACTIVIDADES,
        payload: res.data
    })
}








