import { WEATHER_FORECAST_ASSIGN } from '../type'

const default_state = {};

const reducer = (state = default_state, action) => {
    switch (action.type) {
        case WEATHER_FORECAST_ASSIGN:
            return action.payload;
            break;
        default:
            return state;
            break;
    }
}

export default reducer;