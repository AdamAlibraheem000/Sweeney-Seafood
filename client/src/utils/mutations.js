import { gql } from '@apollo/client';

export const LOGIN = gql`
    mutation login($email: String!, $password; String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            } 
        }
    }
`;

export const ADD_COMMENT = gql`
    mutation addComment($thoughtText: String!) {
        addComment(thoughtText: $thoughtText) {
            _id
            thoughtText
            createdAt
            username
        }
    }
`;

export const ADD_REPLY = gql`
    mutation addReply($commentId: ID!, $replyBody: String!) {
        addReply(commentId: $commentId, replyBody: $replyBody) {
            _id
            replyBody
            createdAt
            username
        }
    }
`;