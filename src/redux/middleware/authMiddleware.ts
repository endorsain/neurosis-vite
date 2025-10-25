import { PATHS } from "../../shared";

export const authMiddleware = (store: any) => (next: any) => (action: any) => {
  console.log("authMiddleware INIT");

  // console.log("action rejected? ", action.type.endsWith("rejected"));
  // console.log("action.status: ", action.payload?.status);

  const result = next(action);
  if (action.type.endsWith("rejected") && action.payload.status === 401) {
    console.log(action.payload.status);

    console.log("authMiddleware ERROR");
    window.location.href = PATHS.access.login;
  }

  // console.log("authMidd ACTION : ", action);

  console.log("authMiddleware END");
  return result;
};
