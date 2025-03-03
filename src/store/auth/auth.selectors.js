export const selectAuthState = state => state.auth;
export const selectIsAuthenticated = state => state.auth.isAuthenticated;
export const selectAuthLoading = state => state.auth.loading;
export const selectAuthError = state => state.auth.error;
export const selectSuccessMessage = state => state.auth.success_message;
