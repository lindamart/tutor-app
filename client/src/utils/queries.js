import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        createdAt
      }
    }
  }
`;

export const QUERY_TUTORS = gql`
  query getTutors {
    tutors {
      _id
      name
      subject
      description
    }
  }
`;

export const QUERY_VIDEOS = gql`
  query getVideos{
    videos {
      _id
      name
      subject
      link
    }
  }
`;

export const QUERY_GAMES = gql`
  query getGames {
    games {
      _id
      name
      subject
      link
    }
  }
`;

