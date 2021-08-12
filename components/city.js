import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCity } from '../store/actions/cities';
import axios from 'axios';
import { assignWeatherForecast } from '../store/actions/weatherForecast';
import config from '../config'

function City() {
    const dispatch = useDispatch();
    const [city, setCity] = useState({ key: "", name: "" });
    const { cities, weatherForecast } = useSelector(state => state);
    
    const onAddSubmit = (e) => {
        axios
            .get('http://api.openweathermap.org/data/2.5/weather?q=' + city.key + '&appid='+config.API_KEY)
            .then(({ data }) => {
                if (cities.filter(c => c.key === city.key).length === 0) {
                    dispatch(addCity({ key: city.key, name: data.name }));
                }

                dispatch(assignWeatherForecast(data));
            })
            .catch(() => {
                alert('Aradığınız şehir bulunamadı');
            });

        e.preventDefault();
    }

    const onChange = (e) => {
        setCity({ key: e.target.value });
    }

    return (
        <div className="container mt-4 bg-light-blue default-border-radius">
            <div className="row">
                <div className="col-lg-6">
                    <h2 className="text-white mt-2">{weatherForecast.name === undefined ? 'Default' : weatherForecast.name}</h2>
                </div>
                <div className="col-lg-6">
                    <form onSubmit={onAddSubmit.bind(this)}>
                        <div className="my-2">
                            <input type="text" onChange={onChange.bind(this)} name="key" className="form-control" placeholder="Find a city" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default City;