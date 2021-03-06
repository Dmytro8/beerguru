import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import { beersApi } from "../../api/beersApi";
import { Beer } from "../Beer/Beer";
import { Spinner } from "../Spinner";

import classes from "./Beers.module.scss";
import { Link, Route } from "react-router-dom";
import { BeerDetails } from "../BeerDetails/BeerDetails";

export const Beers = () => {
  const perPage = 20;
  const [page, increasePage] = useState(1);
  const [beers, setBeers] = useState([]);
  const [allBeers, setAllBeers] = useState([]);
  const [statusModal, setStatusModal] = useState("close");
  const [isDataFetched, setIsDataFetched] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const fetchedBeers = await beersApi.getBeers(page, perPage);
      setBeers(fetchedBeers);
      setIsDataFetched(true);
    }
    async function fetchAllData() {
      const fetchedBeers = await beersApi.getAllBeers();
      setAllBeers(fetchedBeers);
    }
    fetchData();
    fetchAllData();
    return () => {
      setIsDataFetched(false);
    };
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = () => {
    async function fetchData() {
      const fetchedBeers = await beersApi.getBeers(page + 1, perPage);
      const concated = beers.concat(fetchedBeers);
      setBeers(concated);
      increasePage(page + 1);
    }
    fetchData();
  };

  return (
    <div>
      {isDataFetched ? (
        <>
          <InfiniteScroll
            dataLength={beers.length}
            next={fetchMoreData}
            hasMore={true}
            loader={<Spinner />}
            className={classes.beersWrapper}
          >
            {beers.map(beer => (
              <Link
                key={beer.id}
                to={`/details/${beer.id}`}
                onClick={() => setStatusModal("open")}
              >
                <Beer
                  key={beer.id}
                  imageUrl={beer.image_url}
                  beerName={beer.name}
                  beerTagline={beer.tagline}
                  isInModal={false}
                />
              </Link>
            ))}
          </InfiniteScroll>
          <Route
            exact
            render={() => (
              <BeerDetails
                allBeers={allBeers}
                statusModal={statusModal}
                setStatusModal={setStatusModal}
              />
            )}
            path="/details/:beerId"
          ></Route>
        </>
      ) : (
        <div className={classes.spinner}>
          <Spinner />
        </div>
      )}
    </div>
  );
};
