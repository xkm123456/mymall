// 首页数据的请求(相当于MVC中的Controller层)
import {request} from './request'

export function getHomeMultidata()
{
    return request({
        url:'/home/multidata'
    })
}