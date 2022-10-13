

import request from '../utils/request';


export function getArticleList(config) {

    return request.get('/interview/query', {
        params: config,
    })
}

export function getArticleDetail(id) {
    return request.get('/interview/show', {
        params: {
            id,
        }
    })
}

export function likeOrCollect(data) {
    return request.post('/interview/opt', data)
}

// 封装获取点赞/收藏列表接口
// config -> { optType: 1点赞2收藏, page: 当前第几页 }
export function getLikeOrCollectList(config) {
    return request.get("/interview/opt/list", {
        params: config
    })
}