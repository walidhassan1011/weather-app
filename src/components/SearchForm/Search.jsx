import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { UseForecast } from "../../context/ForecastProvider";

import style from "./Search.module.css";
function Search() {
  const [location, setlocation] = useState("");
  const { submitRequest } = UseForecast();
  const onsubmit = (e) => {
    e.preventDefault();
    if (!location || location === "") return;

    submitRequest(location);
  };
  return (
    <>
      <Form onSubmit={onsubmit}>
        <input
          placeholder="enter a location"
          className={style.searchInput}
          onChange={(e) => {
            setlocation(e.target.value);
          }}
        ></input>
        <button onClick={onsubmit} className={style.btnSearch}>
          search
        </button>
      </Form>
    </>
  );
}

export default Search;
