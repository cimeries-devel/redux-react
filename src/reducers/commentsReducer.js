import * as actions from '../actions/commentsActions';

export const estadoInicial = {
  errores: false,
  cargando: true,
  comentarios: [],
}

export default function comentsReducer(estado = estadoInicial, accion) {
  switch (accion.type) {
    case actions.GET_COMMENTS:
      return { ...estado, cargando: true };
    case actions.GET_COMMENTS_SUCCESS:
      return { ...estado, comentarios: accion.payload, cargando: false, errores: false };
    case actions.GET_COMMENTS_ERROR:
      return { ...estado, cargando: false, errores: true };
    default:
      return estado;
  }
}
