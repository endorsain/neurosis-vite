export const handlePending = state => {
  state.loading = true;
};
export const handleRejected = (state, action) => {
  state.loading = false;
  state.error = {
    message: action.payload?.message || 'Unknown error',
    code: action.payload?.code || null,
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
export const handleAuthFulfilled = state => {
  state.loading = false;
  state.isAuthenticated = true;
};
