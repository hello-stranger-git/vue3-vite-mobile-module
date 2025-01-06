import http from "./http";
export const getVersion = (data) => {
    return http.post('/api/web/config/version',data)
}

export const login = () => {
    return http.get('/api/web/config/version')
}