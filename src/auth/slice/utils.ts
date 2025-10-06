export const handlePending = (state: any) => {
  //   state.isAuthenticated = false;
  state.loading = true;
  state.error = null;
};
export const handleRejected = (state: any) => {
  //   state.isAuthenticated = false;
  state.loading = false;
  state.error = null;
};

export const getGeneralDataThunkFulfilled = (state: any) => {
  state.isAuthenticated = true;
  state.loading = false;
  state.error = null;
};
