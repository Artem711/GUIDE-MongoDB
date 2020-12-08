const { gql } = require("apollo-server")

module.exports = gql`
  type Query {
    FindArtist(id: String!): ArtistType!
    SearchArtists: [ArtistType]!
    GetAgeRange: Int!
    GetYearsActiveRange: Int!
  }
  type Mutation {
    CreateArtist(input: ArtistInputType!): ArtistType!
    DeleteArtist(id: String!): ArtistType!
    EditArtist(id: String!, input: ArtistInputType!): ArtistType!
    SetNotRetired: String!
    SetRetired: String!
  }

  # # # # # # # # # # # # # # # # # # # # # # # # # # # #

  # Inputs #
  input ArtistInputType {
    name: String!
    age: Int!
    yearsActive: Int!
    genre: String!
  }

  # # # # # # # # # # # # # # # # # # # # # # # # # # # #

  # Artist
  type ArtistType {
    name: String!
    age: Int!
    yearsActive: Int!
    genre: String!
    image: String
    website: String
    netWorth: Int
    labelName: String
    retired: Boolean
    albums: [AlbumType]
  }

  # Album
  type AlbumType {
    id: ID!
    title: String!
    date: String!
    copiesSold: Int!
    numberTracks: Int!
    image: String!
    revenue: Int!
  }
`
