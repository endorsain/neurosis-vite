export const handle_pending = (state: any) => {
  state.isGoogleLoaded = false;
  state.loading = true;
  state.error = null;
};
export const handle_rejected = (state: any, action: any) => {
  state.isGoogleLoaded = false;
  state.loading = false;
  state.error = action.payload;
};

export const sendGoogleCredential_fullfilled = (state: any) => {
  state.isGoogleLoaded = false;
  state.loading = false;
  state.error = null;
};
