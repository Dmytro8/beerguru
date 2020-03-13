import React, { useEffect, useState } from "react";

import classes from "./Beer.module.scss";

export const Beer = ({ imageUrl, beerName, beerTagline, isInModal }) => {
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
      {isInModal ? (
        <div
          className={classes.beerWrapper}
          style={{ padding: "5px", height: "160px" }}
        >
          <div className={classes.imgWrapper}>
            <img src={imageUrl} alt={imageUrl} />
          </div>
          <div className={classes.detailsWrapper}>
            <div className={classes.beerName}>
              <h3 style={{ fontSize: "12px" }}>{beerName}</h3>
            </div>
          </div>
        </div>
      ) : (
        <>
          {window.matchMedia("(min-width: 510px)").matches ? (
            <div
              className={classes.beerWrapper}
              style={{ padding: "20px", height: "280px" }}
            >
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
      )}
    </>
  );
};
