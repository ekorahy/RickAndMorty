import { gql } from "@apollo/client";

// Character queries
export const GET_CHARACTERS = gql`
  query GetCharacters($page: Int!) {
    characters(page: $page) {
    info {
      count
      pages
      next
      prev
    }
      results {
        id
        name
        status
        species
        image
      }
    }
  }
`;

export const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      image
      species
      status
      type
      gender
      origin {
        name
      }
      location {
        name
      }
      created
    }
  }
`;

// Location queries
export const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      results {
        id
        name
        type
        dimension
      }
    }
  }
`;

export const GET_LOCATION = gql`
  query GetLocation($id: ID!) {
    location(id: $id) {
      id
      name
      type
      dimension
      residents {
        id
        name
        image
      }
    }
  }
`;

// Episode queries
export const GET_EPISODES = gql`
  query GetEpisodes {
    episodes {
      results {
        id
        name
        air_date
        episode
      }
    }
  }
`;

export const GET_EPISODE = gql`
  query GetEpisode($id: ID!) {
    episode(id: $id) {
      id
      name
      air_date
      episode
      characters {
        id
        name
        image
      }
    }
  }
`;