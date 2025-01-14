const url = import.meta.env.VITE_BASE_API_URL;

const handleRequest = async (method, endpoint, data = null) => {
  try {
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    };

    if (data) {
      options.body = JSON.stringify(data);
    }

    const response = await fetch(`${url}${endpoint}`, options);

    if (!response.ok) {
      throw new Error(
        `${method} request to ${endpoint} failed with status ${response.status}`
      );
    }

    return response
  } catch (error) {
    console.error(`Error in ${method} request to ${endpoint}:`, error);
    throw error;
  }
}

async function post(endpoint, data) {
  return await handleRequest('POST', endpoint, data);
}

async function get(endpoint) {
  return await handleRequest('GET', endpoint);
}

async function put(endpoint, data) {
  return await handleRequest('PUT', endpoint, data);
}

async function deleteRequest(endpoint) {
  return await handleRequest('DELETE', endpoint);
}

const api = {
  post,
  get,
  put,
  delete: deleteRequest,
};

export default api;
