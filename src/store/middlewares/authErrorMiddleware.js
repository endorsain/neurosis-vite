// import { setAuthenticated } from '../slices/auth-user/authUser.slice';
// import { logoutThunk } from '../thunks';

// const authErrorMiddleware = store => next => action => {
//   // 1. Codigo que se ejecuta antes de que la accion llegue al reducer.
//   // 2. Determina pasar a la accion al siguiente middleware(o al reducer si es el ultimo).
//   console.log('-------EMPIEZA Auth erro midd-------');
//   console.log(
//     'Codigo que se ejecuta antes de que la accion llegue al reducer.'
//   );

//   const result = next(action);
//   // 3. Codigo que se ejecuta despues de que la accion fue procesada por el reducer.
//   console.log(
//     'Codigo que se ejecuta despues de que la accion fue procesada por el reducer.'
//   );
//   if (
//     action.type.endsWith('rejected')
//     // && action.payload?.error?.status === 401
//   ) {
//     console.log('Error de autenticacion');
//     //se puede ejecutar un thunk de logout.
//     store.dispatch(logoutThunk());
//   }
//   console.log('Salio bien');
//   store.dispatch(setAuthenticated(true));
//   //Se devuelve el resultado para mantener la cadena.
//   console.log('-------TERMINA Auth erro midd-------');
//   return result;
// };

// TODO: Lo que pasaba era que el middleware activaba el dispatch, pero lo que tendria que hacer es salir o modificar el estado de autenticacion sin "despachar" la accion
const authErrorMiddleware = store => next => action => {
  console.log('-------EMPIEZA Auth erro midd-------');
  console.log(
    'Codigo que se ejecuta antes de que la accion llegue al reducer.'
  );

  console.log('ACTION TYPE:', action.type);
  console.log('ACTION PAYLOAD:', action.payload);

  const result = next(action);

  console.log(
    'Codigo que se ejecuta despues de que la accion fue procesada por el reducer.'
  );
  if (
    action.type.endsWith('rejected')
    // && action.payload?.error?.status === 401
  ) {
    console.log('SALIO MAL');
    // return result;
  }
  console.log('STATE AFTER ACTION:', store.getState());

  console.log('-------TERMINA Auth erro midd-------');
  return result;
};

export default authErrorMiddleware;
