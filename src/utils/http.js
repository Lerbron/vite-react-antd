import axios, { CancelToken } from 'axios';
import Cookies from 'js-cookie';
import Qs from 'qs'
import { message } from 'antd'


export const pendingReq = {};

// let curTime = 0,
//   time = 0,
//   intervalTime = 10 * 60 * 1000

const http = axios.create({
  paramsSerializer: function (params) {
    return Qs.stringify(params, {
      arrayFormat: 'repeat'
    })
  }
});

http.interceptors.request.use(config => {
  let Authorization = Cookies.get('Authorization');
  config.headers = {
    ...config.headers,
    'Shanda_Platform': 'Normal',
    'Shanda_Identity': localStorage.getItem('uuid')
  }

  // 频繁操作时，取消同一个接口的前一次请求
  if (!config.noNeedCancel) {
    const key = config.url + '&' + config.method;
    pendingReq[key] && pendingReq[key]('The operation is too frequent~');

    config.cancelToken = new CancelToken((c) => {
      pendingReq[key] = c;
    });
  }

  if (Authorization) {

    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${Authorization}`,
    };
  }

  if (config.method !== 'get') {
    if (config.url != '/file/upload' && config.url != '/connect/token') {
      config.data = {
        ...config.data,
      }
    }
  } else if (config.method === 'get') {
    config.params = {
      ...config.params,
    }
  }

  return config;
}, (error) => {
  // 对请求错误做些什么
  console.log('err:', error)
  return Promise.reject(error);
});

http.interceptors.response.use(response => {
  if (!response.noNeedCancel) {
    const key = response.config.url + '&' + response.config.method;
    pendingReq[key] && delete pendingReq[key];
  }
  return response;
}, err => {
  let errResponse = err?.response??{}

  console.log('errObj:', errResponse)

  // if (errResponse?.status == '401') {
  //   curTime = new Date();
  //   if (curTime - time > intervalTime) {
  //     time = curTime;
  //     message({msg: 'Login expired'})
  //     setTimeout(login, 300)
  //   }
  //   return Promise.reject(errResponse);
  // }

  if (errResponse?.status === 500 && errResponse?.data && errResponse?.data?.error && errResponse?.data?.error?.code === 2009) {
    
    location.href = '/404'
    return Promise.reject(errResponse);
  }



  if (err?.message == 'The operation is too frequent~' || err?.message == 'page unmount') {
    return Promise.reject('')
  }

  message.error(errResponse?.data && errResponse?.data?.error && errResponse?.data?.error?.message || errResponse?.data?.error_description || errResponse?.statusText || 'Something went wrong, please try again later')
  return Promise.reject(errResponse);

})
export default http