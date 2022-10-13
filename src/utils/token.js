//sava token

export function saveToken(token) {
    localStorage.setItem('token', token)
}
//getToken

export function getToken() {
    return localStorage.getItem('token')
}

//deleteToken
export function deleteToken() {
    localStorage.removeItem('token')
}