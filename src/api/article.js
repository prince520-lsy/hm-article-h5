

import request from '../utils/request';


export function getArticleList(config) {

    return request.get('/interview/query', {
        params: config,
    })
}