import React from "react";
import style from "./UPcomingDays.module.css";
function UPcomingDays(props) {
  return (
    <>
      <div className={style.display}>
        <img
          src={`https://www.metaweather.com/static/img/weather/${props.data.imgUrl}.svg`}
          alt=""
        />
        <span>{props.data.weekday}</span>
        <p>{props.data.temperature}°C</p>
      </div>
    </>
  );
}

export default UPcomingDays;
