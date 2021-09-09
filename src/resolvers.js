const resolvers = {
  Query: {
    // returns an array of Photos that will be used to populate the album photo
    photos: (_, { location }, { dataSources }) => {
      return dataSources.photoAPI.getPhotos(location);
    },
  },
};
module.exports = resolvers;
