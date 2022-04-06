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