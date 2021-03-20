import Api from '../configs/Api';

const backend = async (method, url, dataBody, appendHeaders = {}) => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...appendHeaders,
  };

  try {
    const response = await fetch(`${Api.baseUrl}${url}`, {
      method,
      headers,
      body: JSON.stringify(dataBody),
    });
    return response.json();
  } catch (error) {
    return error;
  }
};

export default { backend };
