import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "27053e26-be4d-42b2-bed5-12f19854fff6"
    }
});


export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data) //вернули promise в котором будет находится только data
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },

    follow(userId) {
        return instance.post(`follow/${userId}`)
    },

    getProfile(userId) {
        console.warn('Obsolete method. Please profileAPI object')
        return profileAPI.getProfile(userId);
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId);
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, {status: status});
    }
}

export const authAPI = {
    getUsersMe() {
        return instance.get(`auth/me`)
             .then(response => response.data) 
    }

}