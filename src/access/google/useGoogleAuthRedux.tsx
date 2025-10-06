import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setGoogleLoaded } from "../slice/AccessSlice";
import { AccessThunks } from "../AccessThunks";
import type { GoogleCredentialResponse } from "./types";

export function useGoogleAuthRedux() {
  const dispatch = useDispatch<any>();

  const sendGoogleCredential = useCallback(
    async (credential: string) => {
      await dispatch(AccessThunks.sendGoogleCredentialThunk(credential));
    },
    [dispatch]
  );

  const handleGoogleResponse = useCallback(
    async (response: GoogleCredentialResponse) => {
      if (response?.credential) {
        await sendGoogleCredential(response.credential);
      }
    },
    [sendGoogleCredential]
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
        dispatch(setGoogleLoaded(true));

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
