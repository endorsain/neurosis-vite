import {
  setGoogleLoaded,
  setGoogleCredential,
  clearGoogleCredential,
  AccessReducer,
} from "./slice/AccessSlice";

export { AccessThunks } from "./thunks";

// ✅ Agrupás las actions (no hay dependencia circular)
export const AccessActions = {
  setGoogleLoaded,
  setGoogleCredential,
  clearGoogleCredential,
};

// ✅ Agrupás los thunks
// export const AccessThunks = {
//   accessWithGoogleThunk: accessWithGoogle,
// };

// ✅ Exportás el reducer para usar en rootReducer
export { AccessReducer };
