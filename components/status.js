import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import process from "../process";


const Status = () => {
  const dispatch = useDispatch();
  const { cities, weatherForecast } = useSelector(state => state);
  let weather = {};
  let coord = {};
  let main = {};

  try {
    weather = weatherForecast.weather[0];
    coord = weatherForecast.coord;
    main = weatherForecast.main;
  }
  catch {
    weather = { main: 'Default', description: 'default', icon: '01d' };
    coord = { lat: 0, lon: 0 };
    main = { temp: 273.15 };
  }

  const CityClick = (key) => {
    process(key, dispatch, cities);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3 mt-4 default-border-radius bg-light-pink text-center">
          <img src={"http://openweathermap.org/img/wn/" + weather.icon + "@4x.png"} alt="" />
        </div>
        <div className="col-lg-4 mt-4">
          <div className="px-0 px-lg-4">
            <div className="status-item">{weather.main}</div>
            <div className="mt-3 status-item">{weather.description}</div>
            <div className="mt-3 status-item">{Math.ceil(main.temp - 273.15)}°</div>
            <div className="mt-3 status-item-coordinate text-muted">X: {coord.lon}</div>
            <div className="mt-3 status-item-coordinate text-muted">Y: {coord.lat}</div>
          </div>
        </div>
        <div className="col-lg-5 mt-4">
          <h3>Last Searched Cities</h3>
          <ul className="last-searched">
            {
              cities.map(city => {
                const { key, name } = city;

                return <li key={key} onClick={() => CityClick(key)} className="text-muted mt-2">{name}</li>;
              })
            }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Status;