import React from 'react';


const ReviewList = ({ comments, title }) => {
    if (!comments.length) {
        return <h3>No Reviews yet....</h3>;
    }

    return (
        <div>
            <h3>{title}</h3>
            {comments &&
                comments.map(comment => (
                    <div key={comment._id} className="card mb-3">
                        <div className="card-body">
                            <p>{comment.commentText}</p>
                            <p className="mb-0">
                                Replies: {comment.replyCount}
                            </p>
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default ReviewList;