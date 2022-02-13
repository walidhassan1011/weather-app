import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { ForecastProvider, UseForecast } from "../../context/ForecastProvider";
import CurrentDay from "../curentDay/CurrentDay";
import Header from "../Header/Header";
import Search from "../SearchForm/Search";
import Weather from "../weatherDtails/Weather";
import Loader from "../loader/Loader";
import style from "./card.module.css";
import Error from "../error/Error";

function Card() {
  const { forecastData, toggle, loading, error } = UseForecast();

  return (
    <>
      {!forecastData && (
        <section className={style.main}>
          <div className={style.box2}>
            {!loading && <Header />}
            {error && <Error message={error} />}
            {loading && <Loader />}
            {!loading && <Search />}
          </div>
        </section>
      )}
      {forecastData && (
        <section className={style.main}>
          <div className={style.box}>
            <Weather forecastData={forecastData.currentDAY} />

            <CurrentDay />

            {/* <Loader /> */}
          </div>
        </section>
      )}
    </>
  );
}

export default Card;
