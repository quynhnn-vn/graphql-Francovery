const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const PhotoAPI = require("./datasources/photo-api");
const ArticleAPI = require("./datasources/article-api");
const WeatherAPI = require("./datasources/weather-api");

async function startApolloServer(typeDefs, resolvers) {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
      return {
        photoAPI: new PhotoAPI(),
        articleAPI: new ArticleAPI(),
        weatherAPI: new WeatherAPI(),
      };
    },
  });

  const { url, port } = await server.listen({ port: process.env.PORT || 4000 });
  console.log(`
    🚀  Server is running
    🔉  Listening on port ${port}
    📭  Query at ${url}
  `);
}
startApolloServer(typeDefs, resolvers);
