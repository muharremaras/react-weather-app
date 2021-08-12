import { ADD_CITY } from '../type'

const default_state = [];

const reducer = (state = default_state, action) => {
    switch (action.type) {
        case ADD_CITY:
            return [...state, action.payload];
            break;

        default:
            return state;
            break;
    }
}

export default reducer;