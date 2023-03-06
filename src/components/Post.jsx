import React from 'react';
import {Link} from 'react-router-dom';

export const Post = ({post, resumen = false}) => (
  <article>
    {resumen ? <h2>{post.title}</h2> : <h1>{post.title}</h1>}
    <hr/>
    <p>{resumen ? post.body.substring(0, 100) : post.body}</p>

    {resumen && (
      <Link to={`/posts/${post.id}`} className="btn btn-primary">
        View Post
      </Link>
    )}
    <hr/>
  </article>
);