export interface GoogleCredentialResponse {
  credential: string; // El JWT token de Google
  select_by: string;
}

export interface GoogleConfig {
  client_id: string;
  callback: (response: GoogleCredentialResponse) => void;
}

export interface GoogleButtonConfig {
  theme?: "outline" | "filled_blue" | "filled_black";
  size?: "large" | "medium" | "small";
  type?: "standard" | "icon";
  text?: "signin_with" | "signup_with" | "continue_with" | "signin";
  logo_alignment?: "left" | "center";
}

declare global {
  interface Window {
    google?: {
      accounts: {
        id: {
          initialize: (config: GoogleConfig) => void;
          //undefined a any
          renderButton: (
            element: HTMLElement,
            config: GoogleButtonConfig
          ) => void;
        };
      };
    };
  }
}
