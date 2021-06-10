import storage from '@/utils/storage';
import wait from '@/utils/wait';
import axios from 'axios';

function transformErrResponse(err, leaveOnExpire) {
  let { message } = err.response?.data || {};
  if (leaveOnExpire && err.response?.status === 401) {
    message = "توکن نامعتبر است."
    setTimeout(() => {
      storage.removeItem('bolbolestan-token');
      storage.removeItem('user');
      // eslint-disable-next-line
      location.reload();
    }, 1000);
  }

  return Promise.reject({
    ...(err.response?.data || {}),
    message: message || 'خطایی رخ داد',
  });
}

function transformResponse(res) {
  return res.data || {};
}

function generateOptions() {
  if (storage.getItem('bolbolestan-token')) {
    return {
      headers: {
        authorization: storage.getItem('bolbolestan-token'),
      },
    };
  }

  return {};
}

const API_BASE_URL = 'http://87.247.185.122:32766/';

class HttpClient {
  constructor() {
    this.$http = axios.create({
      baseURL: API_BASE_URL,
    });
  }

  get(endpoint, { sleep = 1, leaveOnExpire = true } = {}) {
    return Promise.all([
      this.$http.get(endpoint, generateOptions()),
      wait(sleep),
    ])
      .then(([res]) => res)
      .then(transformResponse)
      .catch((err) => transformErrResponse(err, leaveOnExpire));
  }

  post(endpoint, payload = {}, { sleep = 1, leaveOnExpire = true } = {}) {
    return Promise.all([
      this.$http.post(endpoint, payload, generateOptions()),
      wait(sleep),
    ])
      .then(([res]) => res)
      .then(transformResponse)
      .catch((err) => transformErrResponse(err, leaveOnExpire));
  }

  delete(endpoint, { sleep = 1, leaveOnExpire = true } = {}) {
    return Promise.all([
      this.$http.delete(endpoint, generateOptions()),
      wait(sleep),
    ])
      .then(([res]) => res)
      .then(transformResponse)
      .catch((err) => transformErrResponse(err, leaveOnExpire));
  }
}

export default new HttpClient();
