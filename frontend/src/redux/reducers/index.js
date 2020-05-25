import { combineReducers } from "redux";
import user from "./user";
import post from "./post";
import actividad from "./actividad";
import oferta from "./oferta";

const reducer = combineReducers({
    user,
    post,
    actividad,
    oferta
})
export default reducer;

//Este archivo coordina todos los reducers