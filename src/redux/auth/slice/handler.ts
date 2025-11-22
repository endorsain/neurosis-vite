import { UserThunk } from "../../user";

const hanlerPending = (state: any) => {
  state.loading = true;
  state.error = null;
};
const handlerRejected = (state: any, action: any) => {
  state.isAuthenticated = false;
  state.loading = false;
  state.error = action.payload;
};

const commonHandler = {
  pending: hanlerPending,
  rejected: handlerRejected,
  fulfilled: (state: any) => {
    state.isAuthenticated = true;
    state.loading = false;
    state.error = null;
  },
};

export const thunkHandlers = {
  [UserThunk.getGeneralUserData.typePrefix]: commonHandler,
};
