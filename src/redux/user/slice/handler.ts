import { UserThunk } from "../thunk";

const handler_pending = (state: any) => {
  //   state.email = null;
  //   state.username = null;
  state.loading = true;
  state.error = null;
};
const handler_rejected = (state: any, action: any) => {
  state.loading = false;
  state.error = action.payload;
};

const commonHandler = {
  pending: handler_pending,
  rejected: handler_rejected,
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
