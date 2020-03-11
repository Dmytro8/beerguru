import React from "react";
import classes from "./App.module.scss";
import { Header } from "../components/Header";
import { Beers } from "../components/Beers/Beers";

export const App = () => {
  return (
    <div className={classes.App}>
      <div className={classes.container}>
        <Header />
        <Beers />
      </div>
    </div>
  );
};
