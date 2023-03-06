import * as actions from '../actions/postsActions';

export const estadoInicial = {
  posts: [],
  errores: false,
  cargando: false,
}
  
export default function postsReducer(estado = estadoInicial, accion) {
  switch (accion.type) {
    case actions.GET_POSTS:
      return { ...estado, cargando: true };
    case actions.GET_POSTS_SUCCESS:
      return {posts: accion.payload, cargando: false, errores: false}
    case actions.GET_POSTS_ERROR:
      return {...estado, cargando: false, errores: true}
    default:
      return estado;
  }
}
