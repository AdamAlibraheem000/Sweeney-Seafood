import { gql } from '@apollo/client';

export const QUERY_COMMENTS = gql`
  query comments {
    comments {
      _id
      commentText
      createdAt
      username
      replyCount
      replies {
        _id
        createdAt
        username
        replyBody
      }
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      comments {
        _id
        commentText
        createdAt
        replyCount
        replies {
          _id
          createdAt
          replyBody
          username
        }
      }
    }
  }
`;


