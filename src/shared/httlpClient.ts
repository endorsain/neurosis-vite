import axios from "axios";

export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_REST, // tu API
  withCredentials: true, // 🔑 importante para que mande las cookies httpOnly
  headers: {
    "Content-Type": "application/json",
  },
});

/* 

{
  data: any;                // cuerpo de la respuesta (lo que tu servidor devolvió con res.json() o similar)
  status: number;           // código HTTP (200, 201, etc.)
  statusText: string;       // texto del código (OK, Created, etc.)
  headers: object;          // cabeceras de la respuesta
  config: object;           // configuración de la request original
  request?: XMLHttpRequest; // objeto bajo nivel (solo en navegador)
}


{
  "data": { "message": "User created", "userId": "abc123" },
  "status": 201,
  "statusText": "Created",
  "headers": { "content-type": "application/json" },
  "config": { "url": "/url", "method": "post", "data": "{\"name\":\"test\"}" }
}

*/

/* 
{
  message: string;          // mensaje de error (p.ej. "Request failed with status code 404")
  name: "AxiosError";
  code?: string;            // código opcional (p.ej. 'ERR_BAD_REQUEST')
  config: object;           // misma config que la request
  request?: XMLHttpRequest; // request original
  response?: {
    data: any;              // respuesta del servidor (por ejemplo { error: "Not found" })
    status: number;         // código HTTP (404, 500, etc.)
    statusText: string;
    headers: object;
    config: object;
    request?: XMLHttpRequest;
  };
}

{
  "message": "Request failed with status code 400",
  "response": {
    "data": { "error": "Invalid credentials" },
    "status": 400,
    "statusText": "Bad Request",
    "headers": { "content-type": "application/json" }
  }
}
*/
