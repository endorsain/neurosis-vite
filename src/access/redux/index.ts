import {
  setGoogleLoaded,
  setGoogleCredential,
  clearGoogleCredential,
  AccessReducer,
} from "./slice/AccessSlice";

import { accessWithGoogle } from "./thunks/AccessThunks";

// ✅ Agrupás las actions (no hay dependencia circular)
export const AccessActions = {
  setGoogleLoaded,
  setGoogleCredential,
  clearGoogleCredential,
};

// ✅ Agrupás los thunks
export const AccessThunks = {
  accessWithGoogleThunk: accessWithGoogle,
};

// ✅ Exportás el reducer para usar en rootReducer
export { AccessReducer };
