import axios from '@/utils/request'

const user = {
    login(data) {
        return axios.post('/user/login', data)
    },
    getUserRoles() {
        return axios.get('/user/roles')
    },
    test() {
        return axios.get('/user/test')
    }
}

export default user