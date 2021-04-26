import wait from '@/utils/wait';
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

  get(endpoint, { sleep = 1 } = {}) {
    return Promise.all([this.$http.get(endpoint), wait(sleep)])
      .then(([res]) => res)
      .then(transformResponse)
      .catch(transformErrResponse);
  }

  post(endpoint, payload = {}, { sleep = 1 } = {}) {
    return Promise.all([this.$http.post(endpoint, payload), wait(sleep)])
      .then(([res]) => res)
      .then(transformResponse)
      .catch(transformErrResponse);
  }

  delete(endpoint, payload = {}, { sleep = 1 } = {}) {
    return Promise.all([this.$http.delete(endpoint, payload), wait(sleep)])
      .then(([res]) => res)
      .then(transformResponse)
      .catch(transformErrResponse);
  }
}

export default new HttpClient();
