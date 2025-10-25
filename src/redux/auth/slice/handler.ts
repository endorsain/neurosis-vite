import { UserThunk } from "../../user";

const handler_pending = (state: any) => {
  state.loading = true;
  state.error = null;
};
const handler_rejected = (state: any, action: any) => {
  state.isAuthenticated = false;
  state.loading = false;
  state.error = action.payload;
};

const commonHandler = {
  pending: handler_pending,
  rejected: handler_rejected,
  fulfilled: (state: any) => {
    state.isAuthenticated = true;
    state.loading = false;
    state.error = null;
  },
};

export const thunkHandlers = {
  [UserThunk.getGeneralUserData.typePrefix]: commonHandler,
};
