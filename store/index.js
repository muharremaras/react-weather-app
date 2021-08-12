import { createStore, combineReducers } from "redux";
import cities from "./reducers/cities"
import weatherForecast from "./reducers/weatherForecast"

const reducers = combineReducers({
    cities: cities,
    weatherForecast: weatherForecast
});

const store = createStore(reducers);

export default store;