export const apiClient = {
  get: config => fetchRequest({ method: 'GET', ...config }),
  post: config => fetchRequest({ method: 'POST', ...config }),
  put: config => fetchRequest({ method: 'PUT', ...config }),
  delete: config => fetchRequest({ method: 'DELETE', ...config }),
};

const fetchRequest = async ({
  url,
  method,
  body = null,
  headers = {},
  params = false,
}) => {
  console.log(params);
  const finalUrl = params ? addParams(url) : url;

  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...getAuthHeaders(headers),
    },
    credentials: 'include',
    body: body ? JSON.stringify(body) : null,
  };

  const response = await fetch(finalUrl, options);
  const result = await response.json();

  if (!response.ok) {
    const error = new Error(result?.message || 'Request failed FRONT');
    error.status = result?.status || response.status;
    error.code = result.error?.code || 'server/error front';
    error.type = result.error?.type || 'server_error';
    error.details = result.error?.details || null;
    throw error;
  }

  console.log('result', result.data);

  return result;
};

const addParams = url => {
  console.log('ENTRO URL');

  const now = Date.now();
  const params = new URLSearchParams({
    currentDate: now, // se supone que es Unix en milisegundos.
  });

  console.log('params.toString()', params.toString());

  return `${url}?${params.toString()}`;
};

const getAuthHeaders = ({ idToken, refreshToken, ...customHeaders }) => ({
  ...(idToken && { Authorization: `Bearer ${idToken}` }),
  ...(refreshToken && { 'X-Refresh-Token': refreshToken }),
  ...customHeaders,
});
