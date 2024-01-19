export const handlePending = state => {
  state.isLoading = true;
};

export const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.items = action.payload;
  state.error = null;
};

export const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
