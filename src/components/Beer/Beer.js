import React, { useEffect, useState } from "react";

import classes from "./Beer.module.scss";

export const Beer = ({ imageUrl, beerName, beerTagline }) => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  return (
    <>
      {window.matchMedia("(min-width: 510px)").matches ? (
        <div className={classes.beerWrapper}>
          <div className={classes.imgWrapper}>
            <img src={imageUrl} alt={imageUrl} />
          </div>
          <div className={classes.detailsWrapper}>
            <div className={classes.beerName}>
              <h3>{beerName}</h3>
            </div>
            <div className={classes.beerTagline}>
              <h5>{beerTagline}</h5>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div>
            <div className={classes.beerName}>
              <h3>{beerName}</h3>
            </div>
            <div className={classes.beerTagline}>
              <h5>{beerTagline}</h5>
            </div>
          </div>
          <hr />
        </div>
      )}
    </>
  );
};
