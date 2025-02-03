import axios from 'axios';

const apiClient = axios.create({
//   baseURL: process.env.REACT_APP_API_BASE_URL || 'https://api.example.com',
  timeout: 10000, // 10초 타임아웃
  headers: {
    'Content-Type': 'application/json',
  },
});

// 요청 인터셉터
apiClient.interceptors.request.use(
  (config) => {
    // 토큰이 있다면 Authorization 헤더에 추가 (예시)
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 응답 인터셉터
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // 에러 처리 로직 추가 (예: 토큰 만료 시 로그아웃 처리)
    return Promise.reject(error);
  }
);

export default apiClient;
