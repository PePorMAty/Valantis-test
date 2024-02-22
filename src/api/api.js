import axios from "axios";

const baseUrl = "http://api.valantis.store:40000/";

const productApi = {
  getProducts() {
    const res = axios.get(baseUrl, {
      headers: {
        "X-Auth": "Valantis",
      },
    });

    return res;
  },
};

export default productApi;

//http://api.valantis.store:40000/
