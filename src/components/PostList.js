import React from 'react';
import PostItem from './PostItem.js'

const PostList = ({ posts, title }) => {
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>{title}</h1>
            {
                posts.map((post) => {
                    return <PostItem post={post} key={post.id} />
                })
            }
        </div>
    )
}

export default PostList;