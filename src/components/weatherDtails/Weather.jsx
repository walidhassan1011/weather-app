import React from "react";
import style from "./Weather.module.css";
import img from "../../img/mountain.jpg";

function Weather({ forecastData }) {
  return (
    <>
      <div className={style.currentDay}>
        <div className={style.sameDay}>
          <div className={style.gradient}></div>
          <img src={img} alt="" />
          <div className={style.details}>
            <h1>{forecastData.weekday}</h1>
            <span>{forecastData.date}</span>
            <span>{forecastData.location}</span>
          </div>
          <div className={style.details2}>
            <img className="mb-2" src={forecastData.weatherIcon} alt="" />
            <h1>{forecastData.temperature}°C</h1>
            <span>{forecastData.weatherDescription}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Weather;
