

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