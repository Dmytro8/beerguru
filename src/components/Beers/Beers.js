import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import { beersApi } from "../../api/beersApi";
import { Beer } from "../Beer/Beer";
import { Spinner } from "../Spinner";

import classes from "./Beers.module.scss";

export const Beers = () => {
  const perPage = 20;
  const [page, increasePage] = useState(1);
  const [beers, setBeers] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const fetchedBeers = await beersApi.getBeers(page, perPage);
      setBeers(fetchedBeers);
    }
    fetchData();
  }, []);
  window.beers = beers;

  const fetchMoreData = () => {
    // setTimeout(() => {
    //   async function fetchData() {
    //     const fetchedBeers = await beersApi.getBeers(page + 1, perPage);
    //     const concated = beers.concat(fetchedBeers);
    //     setBeers(concated);
    //     increasePage(page + 1);
    //   }
    //   fetchData();
    // }, 999000);
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
      <InfiniteScroll
        dataLength={beers.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<Spinner />}
        className={classes.beersWrapper}
      >
        {beers.map(beer => (
          <Beer
            imageUrl={beer.image_url}
            beerName={beer.name}
            beerTagline={beer.tagline}
          />
        ))}
      </InfiniteScroll>
    </div>
  );
};
