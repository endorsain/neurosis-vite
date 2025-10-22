import { AccessThunks } from "../thunks";

const handler_pending = (state: any) => {
  state.loading_request = true;
  state.error = null;
};
const handler_rejected = (state: any, action: any) => {
  state.loading_request = false;
  state.error = action.payload;
};

const commonHandler = {
  pending: handler_pending,
  rejected: handler_rejected,
  fulfilled: (state: any) => {
    state.loading_request = false;
    state.error = null;
  },
};

export const thunkHandlers = {
  [AccessThunks.loginWithGoogle.typePrefix]: commonHandler,
  [AccessThunks.registerWithGoogle.typePrefix]: commonHandler,
  [AccessThunks.loginUser.typePrefix]: commonHandler,
  [AccessThunks.registerUser.typePrefix]: commonHandler,
};
