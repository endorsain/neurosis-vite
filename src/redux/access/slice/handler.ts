import { AccessThunk } from "../thunk";

const handlerPending = (state: any) => {
  state.loadingRequest = true;
  state.response = null;
};
const handlerRejected = (state: any, action: any) => {
  console.log("handlerRejected:", action.payload);
  state.loadingRequest = false;
  state.response = action.payload;
};

const commonHandler = {
  pending: handlerPending,
  rejected: handlerRejected,
  fulfilled: (state: any) => {
    state.loadingRequest = false;
    state.response = null;
  },
};

export const thunkHandlers = {
  [AccessThunk.loginWithGoogle.typePrefix]: commonHandler,
  [AccessThunk.registerWithGoogle.typePrefix]: commonHandler,
  [AccessThunk.loginUser.typePrefix]: commonHandler,
  [AccessThunk.registerUser.typePrefix]: commonHandler,
};
