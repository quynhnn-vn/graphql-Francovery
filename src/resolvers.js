const resolvers = {
  Query: {
    // returns an array of Photos that will be used to populate the album photo
    photos: (_, { location }, { dataSources }) => {
      return dataSources.photoAPI.getPhotos(location);
    },
    articles: (_, { location }, { dataSources }) => {
      return dataSources.articleAPI.getArticles(location);
    },
  },
};
module.exports = resolvers;
