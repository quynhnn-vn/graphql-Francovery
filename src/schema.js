const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    photos(location: String!): AutogeneratedMainType
    articles(location: String!): AutogeneratedMainType
  }
  type AutogeneratedMainType {
    results: [Results]
    articles: [Articles]
  }
  type Results {
    id: ID
    user: User
    urls: Urls
  }
  type Urls {
    regular: String
    full: String
  }
  type User {
    id: String
    username: String
    portfolio_url: String
    profile_image: ProfileImage
  }
  type ProfileImage {
    small: String
  }
  """News API""" 
  type Articles {
    title: String
    description: String
    url: String
    urlToImage: String
    publishedAt: String
    content: String
    source: Source
  }
  type Source {
    name: String
  }
`;

module.exports = typeDefs;
