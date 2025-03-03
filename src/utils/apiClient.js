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
  timestampType = null,
}) => {
  const finalUrl = timestampType ? addTimertampToUrl(url, timestampType) : url;

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

  return result;
};

const addTimertampToUrl = url => {
  const now = new Date();
  const params = URLSearchParams({
    'time[currentDate]': now.toISOString(),
    'time[year]': now.getUTCFullYear(),
    'time[month]': now.getUTCMonth() + 1,
  });
  return `${url}?${params.toString()}`;
};

const getAuthHeaders = ({ idToken, refreshToken, ...customHeaders }) => ({
  ...(idToken && { Authorization: `Bearer ${idToken}` }),
  ...(refreshToken && { 'X-Refresh-Token': refreshToken }),
  ...customHeaders,
});
