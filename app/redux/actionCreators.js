import axios from 'axios';
import * as actionTypes from './actionTypes';

export const loadDishes = (dishes) => {
    return {
        type: actionTypes.LOAD_DISHES,
        payload: dishes,
    }
}

export const getDishes = () => dispatch => {
    axios.get("http://localhost:3000/dishes")
        .then(response => console.log(response))
        .catch(error => console.log(error))
}