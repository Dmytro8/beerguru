import React from "react";
import Loader from "react-loader-spinner";

import classes from "./Spinner.module.scss";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export const Spinner = () => {
  return (
    <div className={classes.spinner}>
      <Loader
        type="Oval"
        color="#fdc22a"
        height={40}
        width={40}
        // timeout={3000} //3 secs
      />
    </div>
  );
};
