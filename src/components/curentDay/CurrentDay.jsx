import React from "react";
import { UseForecast } from "../../context/ForecastProvider";
import UPcomingDays from "../comingDays/UPcomingDays";
import DayDetails from "../DayDetails/DayDetails";
import style from "./currentDay.module.css";
function CurrentDay() {
  const { forecastData } = UseForecast();

  return (
    <>
      <div className={style.otherDays}>
        <div className={style.stateOfday}>
          <DayDetails />
        </div>

        <div className={style.stateofotherDays}>
          {forecastData.comingDays.map((data) => (
            <UPcomingDays data={data} key={data.name} />
          ))}
        </div>
      </div>
    </>
  );
}

export default CurrentDay;
