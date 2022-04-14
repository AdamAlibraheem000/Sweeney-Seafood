import React from 'react'
import { Helmet } from 'react-helmet';
import ReviewList from '../ReviewsList';
import { useQuery } from '@apollo/client';
import { QUERY_COMMENTS } from '../../utils/queries';
import CommentForm from '../CommentForm';

export default function Reviews() {
  const { loading, data } = useQuery(QUERY_COMMENTS);
  const comments = data?.comments || [];
  console.log(comments);

  return (
    <div className='flex-row justify-space-between'>
      <Helmet>
        <title>Sweeney’s - Customer Reviews</title>

      </Helmet>
      <div className="bgm-img-menu"></div>

      {loading ? (
        <div>loading</div>
      ) :
        (
          <div>
            <CommentForm />
            <ReviewList
              comments={comments}
            />
          </div>
        )
      }
    </div>
  )
}
