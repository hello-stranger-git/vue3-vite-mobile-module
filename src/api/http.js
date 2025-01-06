import axios from 'axios';

// 创建 Axios 实例
const http = axios.create({
  baseURL: import.meta.env.VITE_API_NASE_URL, // 替换为你的 API 基础路径
  timeout: 10000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json',
  },
});

// 请求拦截器
http.interceptors.request.use(
  (config) => {
    // 在这里可以添加授权 token
    const token = localStorage.getItem('token'); // 从本地存储获取 token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
http.interceptors.response.use(
  (response) => {
    return response.data; // 直接返回响应数据
  },
  (error) => {
    // 统一处理错误
    if (error.response) {
      console.error('API Error:', error.response.data.message || error.message);
    } else {
      console.error('Network Error:', error.message);
    }
    return Promise.reject(error);
  }
);

export default http;