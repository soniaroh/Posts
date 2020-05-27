import React from 'react';

const Post = ({post}) => {
  return (
  <section className="post-excerpt">
    <h3>{post.title}</h3>
    <p>{post.body.substring(0, 20)}</p>
  </section>
  )
}

export default Post;