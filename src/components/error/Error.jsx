import React from "react";
import style from "./Error.module.css";
function Error(props) {
  return (
    <>
      <h1>{props.message}</h1>
    </>
  );
}

export default Error;
