const resolvers = {
  Query: {
    // Return an array of Photos to populate the photo slideshow
    photos: (_, { location }, { dataSources }) => {
      return dataSources.photoAPI.getPhotos(location);
    },
    // Return an array of Articles to populate the articles grid
    articles: (_, { location }, { dataSources }) => {
      return dataSources.articleAPI.getArticles(location);
    },
    // Return an array of weather data to populate the forecast chart
    weather: (_, { location, lat, lon }, { dataSources }) => {
      return dataSources.weatherAPI.getWeather(location, lat, lon);
    },
  },
};
module.exports = resolvers;
