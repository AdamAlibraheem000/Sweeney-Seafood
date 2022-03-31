import { gql } from '@apollo/client';

export const QUERY_ME = gql`
{
    me {
        _id
        username
        email
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
