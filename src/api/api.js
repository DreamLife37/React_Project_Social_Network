import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "ac0c05ca-2a0e-4372-ab55-c40cc2645467"
    }
});


export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data) //вернули promise в котором будет находится только data
    },

    unfollow(id) {
        return instance.delete(`follow/${id}`)
    },

    follow(id) {
        return instance.post(`follow/${id}`)
    },

    getProfile(id) {
        return instance.get(`profile/` + id)
    }
}

export const authAPI = {
    getUsersMe() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    }

}