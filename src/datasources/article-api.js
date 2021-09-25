const { RESTDataSource } = require("apollo-datasource-rest");
const newsKey = "b165a73af93d49878da4a968bf3263a3";

class ArticleAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://newsapi.org/v2/";
  }
  // Perform a GET to search every articles related to a location
  // sorted by relevancy, 20 results per page and in french language
  getArticles(location) {
    return this.get(
      `everything?q=${location}&sortBy=relevancy&pageSize=20&language=fr&apiKey=${newsKey}`
    );
  }
}
module.exports = ArticleAPI;
