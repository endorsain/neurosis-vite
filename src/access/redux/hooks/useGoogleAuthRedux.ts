import { useCallback, useEffect } from "react";
import { AccessActions } from "../";
import { AccessThunks } from "../";
import { useAppDispatch } from "../../../redux/useStore";

export function useGoogleAuthRedux() {
  const dispatch = useAppDispatch();

  const handleGoogleResponse = useCallback(
    async (response: any) => {
      if (!response?.credential) return;

      // 1) Guardar la respuesta de Google en el store
      dispatch(AccessActions.setGoogleCredential(response.credential));

      // 2) Luego despachar el thunk que lo manda al backend
      // Podés hacerlo inmediatamente o esperar a que el
      // usuario confirme (si el backend devuelve "email no existe")
      dispatch(
        AccessThunks.loginWithGoogle({ googleCredential: response.credential })
      );
    },
    [dispatch]
  );

  useEffect(() => {
    const loadGoogleScript = () => {
      if (document.querySelector('script[src*="gsi/client"]')) {
        initializeGoogle();
        return;
      }
      const script = document.createElement("script");
      script.src = "https://accounts.google.com/gsi/client";
      script.onload = initializeGoogle;
      document.head.appendChild(script);
    };

    const initializeGoogle = () => {
      if (window.google?.accounts?.id) {
        window.google.accounts.id.initialize({
          client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
          callback: handleGoogleResponse,
        });

        dispatch(AccessActions.setGoogleLoaded(true));

        setTimeout(() => {
          const el = document.getElementById("google-auth-button");
          if (el && window.google && window.google.accounts?.id) {
            window.google.accounts.id.renderButton(el, {
              theme: "outline",
              size: "large",
              text: "continue_with",
            });
          }
        }, 100);
      }
    };

    loadGoogleScript();
  }, [dispatch, handleGoogleResponse]);

  return null;
}
