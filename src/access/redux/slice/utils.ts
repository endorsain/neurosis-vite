export const handle_pending = (state: any) => {
  state.error = null;
};
export const handle_rejected = (state: any, action: any) => {
  state.error = action.payload;
};
export const accessWithGoogle_fulfilled = (state: any) => {
  state.error = null;
};
