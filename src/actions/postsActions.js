export const GET_POSTS = 'GET_POSTS';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_ERROR = 'GET_POSTS_ERROR';

export const accionGetPosts = () => ({
  type: GET_POSTS,
});

export const accionGetPostsExito = (posts) => ({
  type: GET_POSTS_SUCCESS,
  payload: posts,
});

export const accionGetPostsError = () => ({
  type: GET_POSTS_ERROR,
});

export function getPosts() {
  return async (dispatch) => {

    dispatch(accionGetPosts());
  
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
  
      dispatch(accionGetPostsExito(data));
    } catch (error) {
      console.log(error);
      dispatch(accionGetPostsError());
    }
  }
}
