import React from "react";
import { UseForecast } from "../../context/ForecastProvider";
import style from "./DayDetails.module.css";
function DayDetails() {
  const { forecastData } = UseForecast();

  return (
    <>
      <div className={style.main}>
        <p>{forecastData.curentDayDetails[0].name}</p>
        <p>{forecastData.curentDayDetails[1].name}</p>
        <p>{forecastData.curentDayDetails[2].name}</p>
        <p>{forecastData.curentDayDetails[3].name}</p>
        <p>{forecastData.curentDayDetails[4].name}</p>
        <p>{forecastData.curentDayDetails[5].name}</p>
      </div>
      <div className={`${style.main} ${style.main2}`}>
        <p>
          {forecastData.curentDayDetails[0].value}
          {forecastData.curentDayDetails[0].unit}
        </p>
        <p>
          {forecastData.curentDayDetails[1].value}
          {forecastData.curentDayDetails[1].unit}
        </p>
        <p>
          {forecastData.curentDayDetails[2].value}
          {forecastData.curentDayDetails[2].unit}
        </p>
        <p>
          {forecastData.curentDayDetails[3].value}
          {forecastData.curentDayDetails[3].unit}
        </p>
        <p>
          {forecastData.curentDayDetails[4].value}
          {forecastData.curentDayDetails[4].unit}
        </p>
        <p>
          {forecastData.curentDayDetails[5].value}
          {forecastData.curentDayDetails[5].unit}
        </p>
      </div>
    </>
  );
}

export default DayDetails;
