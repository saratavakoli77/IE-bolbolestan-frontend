import axios from 'axios';

function transformErrResponse(err) {
  const { message } = err.response?.data || {};

  return Promise.reject({
    ...(err.response?.data || {}),
    message: message || 'خطایی رخ داد',
  });
}

function transformResponse(res) {
  return res.data || {};
}

const API_BASE_URL = 'http://localhost:8081';

class HttpClient {
  constructor() {
    this.$http = axios.create({
      baseURL: API_BASE_URL,
    });
  }

  get(endpoint) {
    return this.$http
      .get(endpoint)
      .then(transformResponse)
      .catch(transformErrResponse);
  }

  post(endpoint, payload = {}) {
    return this.$http
      .post(endpoint, payload)
      .then(transformResponse)
      .catch(transformErrResponse);
  }
}

export default new HttpClient();
