import { combineReducers } from "redux";
import user from "./user";
import post from "./post";
import actividad from "./actividad";

const reducer = combineReducers({
    user,
    post,
    actividad
})
export default reducer;