import { useEffect, type ReactNode } from "react";
import { useDispatch } from "react-redux";
import { UserThunks } from "../user";

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(UserThunks.getGeneralData());
  }, [dispatch]);

  return <>{children}</>;
}
