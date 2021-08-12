import { ADD_CITY } from '../type';

export const addCity = (city) => {
    return {
        type: ADD_CITY,
        payload: city
    };
}