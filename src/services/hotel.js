import httpClient from "../helper/http-client";

const hotelSearch = (model) =>
  httpClient.post("/hotels/local/autocomplete", model);

export { hotelSearch };
