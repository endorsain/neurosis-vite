export const handlePending = state => {
  state.loading = true;
  state.error = { code: null, message: null };
};
export const handleRejected = (state, action) => {
  state.loading = false;
  state.error = {
    code: action.payload?.code || null,
    message: action.payload?.message || 'Unknown error',
  };
};
export const handleSignupFulfilled = state => {
  state.loading = false;
  state.success_message = 'We need you to verify your email and log in!';
  state.error = { code: null, message: null };
};
export const handleSigninFulfilled = state => {
  state.loading = false;
  state.error = { code: null, message: null };
};
export const handleGetAllFulfilled = state => {
  state.loading = false;
  state.isAuthenticated = true;
  state.error = { code: null, message: null };
};
export const handleLogoutFulfilled = state => {
  state.loading = false;
  state.isAuthenticated = false;
  state.error = { code: null, message: null };
};
