export const requestHelper = async (
  url,
  method = 'GET',
  body = {},
  headers = {}
) => {
  const { idToken = null, refreshToken = null, ...customHeaders } = headers;

  const now = new Date();
  const time = {
    'time[currentDate]': now.toISOString(),
    'time[year]': now.getUTCFullYear(),
    'time[month]': now.getUTCMonth() + 1,
  };
  const params = new URLSearchParams(time).toString();

  const finalUrl = `${url}?${params}`;

  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: idToken ? `Bearer ${idToken}` : undefined,
      'X-Refresh-Token': refreshToken || undefined,
      ...customHeaders,
    },
    credentials: 'include',
  };

  if (body && method !== 'GET' && method !== 'HEAD') {
    options.body = JSON.stringify(body);
  }

  //console.log(options);

  try {
    const response = await fetch(finalUrl, options);
    const result = await response.json();

    if (!response.ok) {
      throw result;
    }

    console.log('Success response: ', result);

    return {
      data: result.data,
      status: result.status,
      path: result?.path,
      success: result?.success,
    };
  } catch (error) {
    return handleError(error);
  }
};

const handleError = error => {
  let errorMessage;

  if (error) {
    // Si el error viene de una respuesta HTTP al servidor
    errorMessage = error.serverError || null;
  } else if (error instanceof Error) {
    // Si es otro tipo de error
    errorMessage = error.message || 'Error in responses.';
  }

  console.error('Error details: ', error);

  return {
    data: errorMessage,
    status: error.status,
    path: error?.path,
    success: error?.success,
  };
};
