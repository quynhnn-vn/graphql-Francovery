const { RESTDataSource } = require("apollo-datasource-rest");
const newsKey = "b165a73af93d49878da4a968bf3263a3";

class ArticleAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://newsapi.org/v2/";
  }
  // Perform a GET request to the "/tracks" endpoint
  getArticles(location) {
    return this.get(
      `everything?q=${location}&sortBy=publishedAt&pageSize=20&language=fr&apiKey=${newsKey}`
    );
  }
}
module.exports = ArticleAPI;