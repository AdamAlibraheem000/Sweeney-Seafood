import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_COMMENT } from '../utils/mutations';
import { QUERY_COMMENTS } from '../utils/queries';

const CommentForm = () => {
    const [commentText, setText] = useState('');
    const [characterCount, setCharacterCount] = useState(0);

    const [addComment, { error }] = useMutation(ADD_COMMENT, {
        update(cache, { data: { addComment } }) {
            try {
                // update Comment array's cache
                // could potentially not exist yet, so wrap in a try/catch
                const { comments } = cache.readQuery({ query: QUERY_COMMENTS });
                cache.writeQuery({
                    query: QUERY_COMMENTS,
                    data: { comments: [addComment, ...comments] },
                });
            } catch (e) {
                console.error(e);
            }
        },
    });

    // update state based on form input changes
    const handleChange = (event) => {
        if (event.target.value.length <= 280) {
            setText(event.target.value);
            setCharacterCount(event.target.value.length);
        }
    };

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            await addComment({
                variables: { commentText },
            });

            // clear form value
            setText('');
            setCharacterCount(0);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div className='card-body'>
            <p
                className={`m-0 ${characterCount === 280 || error ? 'text-error' : ''}`}
            >
                Character Count: {characterCount}/280
                {error && <span className="ml-2">Something went wrong...</span>}
            </p>
            <form
                className=" d-flex flex-column m-2"
                onSubmit={handleFormSubmit}
            >
                <textarea
                    placeholder="Write a review and share your experience..."
                    value={commentText}
                    className="form-input col-12 col-md-9"
                    onChange={handleChange}
                ></textarea>
                <button className="btn btn-primary col-12 col-md-3 mt-2" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default CommentForm;
