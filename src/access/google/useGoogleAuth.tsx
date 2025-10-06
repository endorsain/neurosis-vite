import { useCallback, useEffect, useState } from "react";
import type { GoogleCredentialResponse, GoogleButtonConfig } from "./types";
import axios from "axios";

const httpClient = axios.create({
  baseURL: "http://localhost:3000/v1/auth", // tu API
  withCredentials: true, // 🔑 importante para que mande las cookies httpOnly
  headers: {
    "Content-Type": "application/json",
  },
});

export function useGoogleAuth() {
  const [isGoogleLoaded, setIsGoogleLoaded] = useState(false);
  console.log("--useGoogleAuth--");

  // SOLUCIÓN useCallback: Función estable que no se recrea
  const sendGoogleCredential = useCallback(async (googleCredential: string) => {
    console.log("🚀 Enviando token al servidor...");
    console.log("📦 Token enviado:", googleCredential.substring(0, 50) + "...");

    try {
      //TODO: Sacar los 'setTimeout'
      const response = await httpClient.post("access-with-google", {
        googleCredential,
      });

      console.log("📥 Respuesta del servidor:", response.data);
    } catch (error) {
      console.error("❌ Error enviando al servidor:", error);
    }
  }, []); // Sin dependencias = función nunca cambia

  // SOLUCIÓN useCallback: handleGoogleResponse estable
  const handleGoogleResponse = useCallback(
    async (response: GoogleCredentialResponse) => {
      console.log("🎉 Google respondió con token:", response.credential);
      await sendGoogleCredential(response.credential);
    },
    [sendGoogleCredential]
  ); // Depende de sendGoogleCredential (que es estable)

  useEffect(() => {
    console.log("🔄 useEffect ejecutado - cargando Google Auth");

    const loadGoogleScript = () => {
      // Verificar si script ya existe
      if (document.querySelector('script[src*="gsi/client"]')) {
        console.log("⚠️ Script de Google ya cargado");
        initializeGoogle();
        return;
      }

      console.log("📥 Cargando script de Google...");
      const script = document.createElement("script");
      script.src = "https://accounts.google.com/gsi/client";
      script.onload = initializeGoogle;
      script.onerror = () =>
        console.error("❌ Error cargando script de Google");
      document.head.appendChild(script);
    };

    const initializeGoogle = () => {
      if (window.google?.accounts?.id) {
        console.log("🔧 Inicializando Google Identity Services...");

        window.google.accounts.id.initialize({
          client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
          callback: handleGoogleResponse, // ← Función estable gracias a useCallback
        });

        setIsGoogleLoaded(true);
        console.log("✅ Google Auth inicializado correctamente");

        // Renderizar botón después de un pequeño delay
        setTimeout(renderGoogleButton, 100);
      } else {
        console.error("❌ Google Identity Services no disponible");
      }
    };

    const renderGoogleButton = () => {
      const buttonElement = document.getElementById("google-auth-button");

      if (buttonElement && window.google?.accounts?.id) {
        console.log("🎨 Renderizando botón de Google...");

        // Limpiar contenido previo
        buttonElement.innerHTML = "";

        // SOLUCIÓN ERROR 3: Configuración con tipos correctos
        const buttonConfig: GoogleButtonConfig = {
          theme: "outline",
          size: "large",
          text: "continue_with",
        };

        window.google.accounts.id.renderButton(buttonElement, buttonConfig);
        console.log("✅ Botón Google renderizado exitosamente");
      } else {
        console.warn(
          "⚠️ No se puede renderizar botón: elemento o Google no disponible"
        );
      }
    };

    loadGoogleScript();

    // Cleanup opcional
    return () => {
      console.log("🧹 Cleanup de Google Auth hook");
    };
  }, [handleGoogleResponse]); // ← AHORA SÍ incluimos dependencia (que es estable)

  return {
    isGoogleLoaded,
    sendGoogleCredential,
  };
}
