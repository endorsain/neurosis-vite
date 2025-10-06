import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { authMiddleware } from "./middleware/authMiddleware";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
