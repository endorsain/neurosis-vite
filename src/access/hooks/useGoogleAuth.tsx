import { useCallback, useEffect, useState } from "react";

export function useGoogleAuth() {
  const [googleCredential, setGoogleCredential] = useState(null);
  const [googleLoaded, setGoogleLoaded] = useState(false);

  // 👉 Maneja la respuesta del login de Google
  const handleGoogleResponse = useCallback((response: any) => {
    if (!response?.credential) return;
    setGoogleCredential(response); // Guarda el token de Google
  }, []);

  // 👉 Inicializa la API de Google cuando se carga el script
  const initializeGoogle = useCallback(() => {
    if (!window.google?.accounts?.id) return;

    window.google.accounts.id.initialize({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      callback: handleGoogleResponse,
    });

    setGoogleLoaded(true); // Marca que la API fue cargada

    // Renderiza el botón
    setTimeout(() => {
      const el = document.getElementById("google-auth-button");
      if (el) {
        window?.google?.accounts.id.renderButton(el, {
          theme: "outline",
          size: "large",
          text: "continue_with",
        });
      }
    }, 100);
  }, [handleGoogleResponse]);

  // 👉 Carga el script de Google
  useEffect(() => {
    const loadGoogleScript = () => {
      // Si el script ya está cargado, inicializa Google directamente
      if (document.querySelector('script[src*="gsi/client"]')) {
        initializeGoogle();
        return;
      }

      const script = document.createElement("script");
      script.src = "https://accounts.google.com/gsi/client";
      script.onload = initializeGoogle;
      document.head.appendChild(script);
    };

    loadGoogleScript();
  }, [initializeGoogle]);

  return { googleCredential, googleLoaded };
}
