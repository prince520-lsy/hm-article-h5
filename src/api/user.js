
import request from '../utils/request'

export function register(data) {
    return request.post('/user/register', data)
}

export function login(user) {
    return request.post('user/login', user)
}

export function getUserInfo() {
    return request.get('/user/currentUser')
}