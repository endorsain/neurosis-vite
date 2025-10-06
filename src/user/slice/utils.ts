export const handlePending = (state: any) => {
  state.email = null;
  state.username = null;
  state.loading = true;
  state.error = null;
};
export const handleRejected = (state: any, action: any) => {
  //   state.email = null;
  //   state.username = null;
  state.loading = false;
  state.error = action.payload;
};

export const getGeneralDataThunkFulfilled = (state: any, action: any) => {
  state.email = action.payload.email;
  state.username = action.payload.username;
  state.loading = false;
  state.error = null;
};
