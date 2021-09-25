const { RESTDataSource } = require("apollo-datasource-rest");
const unsplashKey = "xoRVmyCcNB5kTgZJH9wizaN4ouJP5Zd845NNnnBWSxo";

class PhotoAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.unsplash.com/";
  }
  // Perform a GET to search photos related to a location
  getPhotos(location) {
    return this.get(
      `search/photos?page=1&query=${location}&client_id=${unsplashKey}`
    );
  }
}
module.exports = PhotoAPI;
