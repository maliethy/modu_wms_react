import reactCookies from 'react-cookies';
import axios from 'axios';
import setToken from '@utils/setToken';
import router from 'next/router';

const baseURL = process.env.NODE_ENV === 'development' ? '/' : 'https://oms.modument.co.kr/'; //개발모드일 때 proxy서버로 요청보내고 배포모드일 때 실서버로 요청보내기
// const baseURL = 'http://localhost:8080/server/'; //build 후 nginx로 test하기

export const axiosApiInstance = axios.create({
  baseURL: baseURL,
  withCredentials: true,
});

export const axiosApiRefreshToken = axios.create({
  baseURL: baseURL,
  withCredentials: true,
});

axiosApiInstance.interceptors.request.use(
  (config) => {
    const accessTokenByCookies = reactCookies.load('accessToken');

    config.headers = {
      Authorization: `Bearer ${accessTokenByCookies}`,
      Accept: 'application/json',
      timeout: 10 * 60 * 1000,
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

axiosApiRefreshToken.interceptors.request.use(
  (config) => {
    const refreshTokenByCookies = reactCookies.load('refreshToken');

    config.headers = {
      Authorization: `Bearer ${refreshTokenByCookies}`,
      Accept: 'application/json',
      timeout: 10 * 60 * 1000,
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

axiosApiInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    const refreshTokenByCookies = await Promise.resolve(reactCookies.load('refreshToken'));

    if (
      (error.response?.status === 401 || error.response?.status === 403) &&
      originalRequest.url === '/Web/RefreshToken'
    ) {
      console.log('Prevent infinite loops');
      console.log('refreshToken 만료1 - access갱신 후에도 에러');
      reactCookies.remove('accessToken', { path: '/' });
      reactCookies.remove('refreshToken', { path: '/' });
      reactCookies.remove('omsID', { path: '/' });
      localStorage.clear();
      router.replace('/');
      //   message.warn('세션이 만료되어 다시 로그인이 필요합니다.', 4);
      // return Promise.reject(error);
    }

    if ((error.response?.status === 401 || error.response?.status === 403) && refreshTokenByCookies) {
      try {
        if (refreshTokenByCookies) {
          const response = await axiosApiRefreshToken.get('/Web/RefreshToken');
          const newAccessToken = response.data.accessToken;
          const omsIDByCookies = reactCookies.load('omsID');

<<<<<<< HEAD
          setToken(omsIDByCookies, refreshTokenByCookies);
=======
          setToken(newAccessToken, refreshTokenByCookies, omsIDByCookies, response.data.accessTokenExpireTime);
>>>>>>> 8b185df2ecbaa26175b948a1903a4f40dddfbda5
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

          return axios(originalRequest);
        }
      } catch (error) {
        console.log('refreshToken 만료2 - 다른 기기 로그인');
        reactCookies.remove('accessToken', { path: '/' });
        reactCookies.remove('refreshToken', { path: '/' });
        reactCookies.remove('omsID', { path: '/' });
        localStorage.clear();
        router.replace('/');
        // message.warn('다른 기기에서 로그인되었습니다. 다시 로그인해주세요.', 4);
      }
    }
    return Promise.reject(error);
  },
);
