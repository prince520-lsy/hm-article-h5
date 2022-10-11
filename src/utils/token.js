//sava token

export function saveToken(token) {
    localStorage.setItem('Token', token)
}
//getToken

export function getToken() {
    return localStorage.getItem('token')
}

//deleteToken
export function deleteToken() {
    localStorage.removeItem('token')
}