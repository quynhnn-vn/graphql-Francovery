const resolvers = {
  Query: {
    // returns an array of Photos that will be used to populate the album photo
    photos: (_, { location }, { dataSources }) => {
      return dataSources.photoAPI.getPhotos(location);
    },
    articles: (_, { location }, { dataSources }) => {
      return dataSources.articleAPI.getArticles(location);
    },
    weather: (_, { location, lat, lon }, { dataSources }) => {
      return dataSources.weatherAPI.getWeather(location, lat, lon);
    },
  },
};
module.exports = resolvers;
