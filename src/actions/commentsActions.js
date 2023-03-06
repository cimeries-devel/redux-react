export const GET_COMMENTS = 'GET_COMMENTS ';
export const GET_COMMENTS_SUCCESS = 'GET_COMENTARIOS_SUCCESS';
export const GET_COMMENTS_ERROR = 'GET_COMENTARIOS_ERROR';

export const accionGetComentarios = () => ({
  type: GET_COMMENTS,
});

export const accionGetComentariosExito = (comentarios) => ({
  type: GET_COMMENTS_SUCCESS,
  payload: comentarios,
});

export const accionGetComentariosError = () => ({
  type: GET_COMMENTS_ERROR,
});

export function getComentarios(postId) {
  return async dispatch => {

    dispatch(accionGetComentarios());

    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
      const data = await response.json();

      dispatch(accionGetComentariosExito(data));
    } catch (error) {
      console.log(error);
      dispatch(accionGetComentariosError());
    }
  }
}
