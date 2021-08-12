// 首页数据的请求(相当于MVC中的Controller层)
import {request} from './request'

export function getHomeMultidata()
{
    return request({
        url:'/home/multidata'
    })
}

export function getHomeProductdata(type,page)
{
    return request({
        url:'https://localhost:44324/Product/GetAllProduct',
        params:{
            type,
            page
        }
    })
}