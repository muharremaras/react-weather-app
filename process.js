import { addCity } from '/store/actions/cities';
import axios from 'axios';
import { assignWeatherForecast } from '/store/actions/weatherForecast';
import config from '/config';

const process = (key, dispatch, cities) => {
    axios
        .get('http://api.openweathermap.org/data/2.5/weather?q=' + key + '&appid=' + config.API_KEY)
        .then(({ data }) => {
            if (cities.filter(c => c.key === key).length === 0) {
                dispatch(addCity({ key: key, name: data.name }));
            }

            dispatch(assignWeatherForecast(data));
        })
        .catch(() => {
            alert('Aradığınız şehir bulunamadı');
        });
};

export default process;