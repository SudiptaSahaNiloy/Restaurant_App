import axios from 'axios';
import * as actionTypes from './actionTypes';

export const loadDishes = (dishes) => {
    return {
        type: actionTypes.LOAD_DISHES,
        payload: dishes,
    }
}

export const getDishes = () => dispatch => {
    axios.get("https://restaurantapp-e9488-default-rtdb.firebaseio.com/dishes.json")
        .then(response => dispatch(loadDishes(response.data)))
        .catch(error => console.log(error))
}