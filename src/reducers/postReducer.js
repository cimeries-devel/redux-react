import * as actions from '../actions/postActions';

export const estadoInicial = {
  post: {},
  errores: false,
  cargando: true,
}
  
export default function postReducer(estado = estadoInicial, accion) {
  switch (accion.type) {
    case actions.GET_POST:
      return { ...estado, cargando: true };
    case actions.GET_POST_SUCCESS:
      return { post: accion.payload, cargando: false, errores: false };
    case actions.GET_POST_ERROR:
      return { ...estado, cargando: false, errores: true };
    default:
      return estado;
  }
}
