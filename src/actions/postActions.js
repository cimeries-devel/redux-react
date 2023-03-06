export const GET_POST = 'GET_POST';
export const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
export const GET_POST_ERROR = 'GET_POST_ERROR';

export const accionGetPost = () => ({
  type: GET_POST,
});

export const accionGetPostExito = (post) => ({
  type: GET_POST_SUCCESS,
  payload: post,
});

export const accionGetPostError = () => ({
  type: GET_POST_ERROR,
});

export function getPost(postId) {
  return async dispatch => {

    dispatch(accionGetPost());

    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      const data = await response.json();

      dispatch(accionGetPostExito(data));
    } catch (error) {
      console.log(error);
      dispatch(accionGetPostError());
    }
  }
}
