import {
    GET_ALL_OFERTAS,
  
} from "../types";

import axios from 'axios';
import store from '../store'

export const getAllOfertas = async() => {
    const token = localStorage.getItem('authToken');
    const res = await axios.get('http://localhost:3001/offers', {
        headers: {
            Authorization: token
        }
    });
    console.log(res.data)
    store.dispatch({
        type: GET_ALL_OFERTAS,
        payload: res.data
    })
    return res;
}