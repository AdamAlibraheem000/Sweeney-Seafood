import { gql } from '@apollo/client';

export const QUERY_ME = gql`
{
    me {
        _id
        username
        comments {
            _id
            thoughtText
            username
            replyCount
            replies {
                _id
                replyBody
                username
            }
        }
    }
}`;

export const QUERY_COMMENTS = gql`
    query comments($username: String) {
        comments(username: $username) {
            _id
            thoughText
            createdAt
            username
            replies {
                replyBody
                createdAt
                username
            }
        }
    }
`;

export const QUERY_COMMENT = gql`
    query comment($id: ID!) {
        comment(id: $id) {
            _id
            thoughtText
            createdAt
            username
            replies {
                replyBody
                createdAt
                username
            }
        }
    }
`;

export const QUERY_USERS = gql`
    {
        users {
            _id
            username
        }
    }
`;

export const QUERY_USER = gql`
    query user($username: String!) {
        user(username: $username) {
            _id
            username
            comments {
                _id
                thougthText
                createdAt
                replies {
                    _id
                    replyBody
                }
            }
        }
    }
`;