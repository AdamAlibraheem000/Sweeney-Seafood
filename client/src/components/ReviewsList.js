import React, { useState } from 'react';


const ReviewList = ({ comments, title }) => {
    if (!comments.length) {
        return <h3>No Reviews yet....</h3>;
    }

    return (
        <div>
            <h3>{title}</h3>
            {comments &&
                comments.map(comment => (
                    <div key={comment.id} className="card mb-3">
                        <p className='card-header'></p>
                    </div>
                ))}
        </div>
    )
}