const axios = require("axios").default;

const httpClient = axios.create({
  baseURL: "https://chamedoon.com/api/v1",
  headers: {
    "content-type": "application/json;charset=UTF-8",
  },
});

export default httpClient;
