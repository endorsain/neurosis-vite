import { useEffect, type ReactNode } from "react";
import { UserThunk, useAppDispatch } from "../redux";

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(UserThunk.getGeneralUserData());
  }, [dispatch]);

  return <>{children}</>;
}
