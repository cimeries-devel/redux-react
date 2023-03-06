import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getPosts} from '../actions/postsActions';
import {Post} from '../components/Post';


const PagePosts = ({dispatch, posts, cargando, errores}) => {

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const mostrarPosts = () => {

    if (cargando) return <p>Cargando posts...</p>
    if (errores) return <p>Ha ocurrido un error.</p>

    return posts.map((post) => <Post key={post.id} post={post} resumen={true} />);
  }

  return (
    <div className="container">
      <h1 className="mb-4">Posts</h1>
      <hr/>
      {mostrarPosts()}
    </div>
  );
}

const mapStateToProps = (state) => ({
  posts: state.posts.posts,
  errores: state.posts.errores,
  cargando: state.posts.cargando,
});

export default connect(mapStateToProps)(PagePosts);
