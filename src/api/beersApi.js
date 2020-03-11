import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.punkapi.com/v2/"
});

export const beersApi = {
  getBeers(page, perPage) {
    return instance
      .get(`/beers?page=${page}&per_page=${perPage}`)
      .then(response => {
        return response.data;
      });
  }
};
