import React, { useContext, useEffect } from "react";
import { appContext } from "../context/AppContext";
import classes from "../app.module.css";
import gor from "../../assets/images/image.png";
import SearchForm from "./SearchForm";

export default function Weather() {
  const { fetchWeatherData, weatherData } = useContext(appContext);
  useEffect(() => {
    fetchWeatherData();
  }, []);

  return (
    <>
      {weatherData.map((item) => (
        <section className={`${classes.container} ${classes.weather}`}>
          {/* <SearchForm /> */}
          <div className={classes.weather__card}>
            <img
              src="http://openweathermap.org/img/wn/11n@2x.png"
              alt="weather"
            />
            <div className={classes.card__text}>
              <h1>{item.main.temp}° C</h1>
              <p>
                <strong>{item.weather[0].description.toUpperCase()}</strong>
              </p>
              <p>Влажность {item.main.humidity}%</p>
              <p>Скорость ветра {item.wind.speed} м/с</p>
            </div>
            <img style={{ width: 300 }} src={gor} alt="" />
            <h2>{item.name}</h2>
          </div>
        </section>
      ))}
    </>
  );
}
