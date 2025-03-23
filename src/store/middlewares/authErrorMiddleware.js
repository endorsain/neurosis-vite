// TODO: Lo que pasaba era que el middleware activaba el dispatch, pero lo que tendria que hacer es salir o modificar el estado de autenticacion sin "despachar" la accion
const authErrorMiddleware = store => next => action => {
  console.log('-------EMPIEZA authErrorMiddleware-------');
  const result = next(action);
  if (action.type.endsWith('rejected') && action.payload.status === 401) {
    console.log('te vas negri!');
    window.location.href = '/sign-in';
  }
  console.log('-------TERMINA authErrorMiddleware-------');
  return result;
};

export default authErrorMiddleware;
