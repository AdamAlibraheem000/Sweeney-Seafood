import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

// export const CREATE_USER = gql`
// mutation addUser() {
//        addUser() {
//         username
//        }
//    }
//      `;

export const ADD_COMMENT = gql`
  mutation addComment($commentText: String!) {
    addComment(commentText: $commentText) {
      _id
      commentText
      createdAt
      username
      replyCount
      replies {
        _id
      }
    }
  }
`;

export const ADD_REPLY = gql`
  mutation addReply($commentId: ID!, $replyBody: String!) {
    addReply(commentId: $commentId, replyBody: $replyBody) {
      _id
      replyCount
      replies {
        _id
        replyBody
        createdAt
        username
      }
    }
  }
  `;
