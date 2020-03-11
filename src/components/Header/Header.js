import React from "react";

import classes from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={classes.header}>
      <h1>
        <span>beer</span>guru
      </h1>
    </header>
  );
};
