// 封装网络请求模块
import axios from 'axios'

// 
export function request(config)
{
    // 1.创建axios实例
    const instance1 = axios.create({
        baseURL:'http://123.207.32.32:8000',
        timeout:5000
    });

    // 2.创建axios的拦截器
    instance1.interceptors.request.use(     // 拦截请求
    res => {
        return res;
    },err => {
        // console.log('request error info：' + err);
    });

    instance1.interceptors.response.use(    // 拦截响应  
    res => {
        return res.data;
    },err => {
        // console.log('response error info：' + err);
    });

    // 3.发送真正的网络请求(返回的是一个Promise对象)
    return instance1(config);
}