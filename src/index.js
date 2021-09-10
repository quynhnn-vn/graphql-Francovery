const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const PhotoAPI = require("./datasources/photo-api");
const ArticleAPI = require("./datasources/article-api");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      photoAPI: new PhotoAPI(),
      articleAPI: new ArticleAPI(),
    }
  }
});

server.listen().then(() => {
  console.log(`
      🚀  Server is running!
      🔉  Listening on port 4000
      📭  Query at https://studio.apollographql.com/dev
    `);
});
