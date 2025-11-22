import { UserThunk } from "../thunk";

const handlerPending = (state: any) => {
  //   state.email = null;
  //   state.username = null;
  state.loading = true;
  state.error = null;
};
const handlerRejected = (state: any, action: any) => {
  state.loading = false;
  state.error = action.payload;
};

const commonHandler = {
  pending: handlerPending,
  rejected: handlerRejected,
  fulfilled: (state: any, action: any) => {
    state.email = action.payload.email;
    state.username = action.payload.username;
    state.loading = false;
    state.error = null;
  },
};

export const thunkHandlers = {
  [UserThunk.getGeneralUserData.typePrefix]: commonHandler,
};
