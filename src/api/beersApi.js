import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.punkapi.com/v2/"
});

export const beersApi = {
  async getBeers(page, perPage) {
    const response = await instance.get(
      `/beers?page=${page}&per_page=${perPage}`
    );
    return response.data;
  },
  async getAllBeers() {
    let beersData = [];
    for (let i = 1; i < 6; i++) {
      const response = await instance.get(`/beers?page=${i}&per_page=80`);
      beersData = beersData.concat(response.data);
    }
    return beersData;
  },
  async getBeer(beerId) {
    const response = await instance.get(`/beers/${beerId}`);
    return response.data;
  },
  async getSimilarBeers(ibu_gt, ibu_lt, abv_gt, abv_lt, ebc_gt, ebc_lt) {
    let compareIBU = `ibu_gt=${ibu_gt}&ibu_lt${ibu_lt}`;
    let compareABV = `abv_gt=${abv_gt}&abv_lt=${abv_lt}`;
    let compareEBC = `ebc_gt=${ebc_gt}&ebc_lt=${ebc_lt}`;
    const response = await instance.get(
      `beers?${compareIBU}&${compareABV}&${compareEBC}`
    );
    return response.data;
  }
};
