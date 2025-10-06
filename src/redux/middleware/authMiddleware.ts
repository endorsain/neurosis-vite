export const authMiddleware = (store: any) => (next: any) => (action: any) => {
  console.log("Inicio de authMiddleware");

  console.log(action.type.endsWith("rejected"));
  console.log(action.payload?.status);

  const result = next(action);
  if (action.type.endsWith("rejected") && action.payload.status === 401) {
    console.log(action.payload.status);

    console.log("te vas negri!");
    window.location.href = "/login";
  }

  console.log("authMidd ACTION : ", action);

  console.log("Fin de authMiddleware");
  return result;
};
