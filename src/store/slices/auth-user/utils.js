export const handlePending = state => {
  state.loading = true;
  state.error = null;
};
export const handleRejected = (state, action) => {
  state.loading = false;
  state.error = {
    code: action.payload?.code || null,
    message: action.payload?.message || 'Unknown error',
  };
};
export const handleGetGeneralDataFulfilled = state => {
  state.loading = false;
  state.isAuthenticated = true;
  state.error = null;
};
export const handleLogoutFulfilled = state => {
  state.loading = false;
  state.isAuthenticated = false;
  state.error = null;
};
export const handleSigninFulfilled = state => {
  state.loading = false;
  state.isAuthenticated = true;
  state.error = null;
};
