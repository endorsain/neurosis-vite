import { AccessThunk } from "../thunk";

const handler_pending = (state: any) => {
  state.loading_request = true;
  state.response = null;
};
const handler_rejected = (state: any, action: any) => {
  state.loading_request = false;
  state.response = action.payload;
};

const commonHandler = {
  pending: handler_pending,
  rejected: handler_rejected,
  fulfilled: (state: any) => {
    state.loading_request = false;
    state.response = null;
  },
};

export const thunkHandlers = {
  [AccessThunk.loginWithGoogle.typePrefix]: commonHandler,
  [AccessThunk.registerWithGoogle.typePrefix]: commonHandler,
  [AccessThunk.loginUser.typePrefix]: commonHandler,
  [AccessThunk.registerUser.typePrefix]: commonHandler,
};
