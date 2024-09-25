import { gql } from "@apollo/client";

// Character queries
export const GET_CHARACTERS = gql`
  query GetCharacters {
    characters {
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