import { useEffect, useState } from 'react';
import { useActionCreators } from './useActionCreators';
import fetch from 'axios';

//http://10.50.50.97:8008/gavharopa-v1/api

// const url =
//   process.env.NODE_ENV === 'development'
//     ? 'http://10.50.50.97:8008/marketplace-v1/api/'
//     : 'https://my.fido.uz/marketplace-v1/api';

const url = 'https://my.fido.uz/marketplace-v1/api';
//const url = 'http://10.50.71.76:8080/marketplace-v2/api';

// const url =
//   process.env.NODE_ENV === 'development'
//     ? 'http://10.50.50.97:8008/marketplace-v1/api/'
//     : 'http://10.50.50.97:8008/gavharopa-v1/api';

export const axios = fetch.create({
  baseURL: url,
  //baseURL: 'http://10.50.71.76:8080/marketplace-v2/api/', //test
  headers: { 'Access-Control-Allow-Origin': '*' },
});

axios.interceptors.request.use(
  function (config) {
    let token = JSON.parse(localStorage.getItem('persist:root')!);
    const { accessToken, tokenType } = JSON.parse(token.user);

    config.headers = {
      ...config.headers,
      Authorization: `${tokenType} ${accessToken}`,
    };

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // console.log('axios', error);
    // console.log('axios', error.response.status);
    // console.log('axios', error.status);
    // console.log('axios', error.statusCode);
    if (
      error &&
      error.response &&
      error.response.status &&
      error.response.status === 401
    ) {
      // alert('К сожалению, ваша сессия истекла.');
      //return window.location.replace('/marketplace/#/');
    }

    let err;
    if (error.response && error.response.data && error.response.data.apierror) {
      err = error.response.data.apierror;
    } else {
      err = error;
    }

    return Promise.reject(err);
  }
);

type AxiosURLType = string;

export const useAxios = <T>(url: AxiosURLType) => {
  const [data, setData] = useState<T[]>();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { setSnackbarMessage } = useActionCreators();

  async function getRequest(getUrl: string) {
    try {
      setLoading(true);
      const response = await axios.get(getUrl);
      const responseDate = await response.data;
      setLoading(false);
      setData(responseDate);
    } catch (e) {
      setLoading(false);
      setSnackbarMessage({
        message: e.message,
        type: 'error',
      });
      setError(e.message);
    }
  }

  useEffect(() => {
    getRequest(url);
  }, []);

  return {
    data,
    error,
    loading,
    reFetch: (fetchUrl?: string) => getRequest(fetchUrl ? fetchUrl : url),
  };
};
