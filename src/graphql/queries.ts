import { gql } from "@apollo/client";

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
  query ($id: ID!) {
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