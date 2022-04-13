import axios from "axios";

const instance = axios.create({
    withCredentials:true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": '53743326-f61f-4a39-ac8a-be7cd4a5c568'
    }
})

//User API'S

export const UserAPI = {

    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    getCurrentPage (pageNumber:number, pageSize:number){
        return  instance.get(`users?page=${pageNumber}&count=${pageSize}`)
            .then(response=> {
                return response.data
            })
    },

    ///PostContainer API'S

    getUserProfile (userID:number) {
        return instance.get(`profile/${userID}`)

    },
    getUserStatus (userID:number) {
        return instance.get(`profile/status/${userID}`)

    },
    updateStatus (status:string) {
        return instance.put(`profile/status/`, {status})

    },

///header API'S


}

export const followAPI = {

    deleteFollow (userID:number) {
        return instance.delete(`follow/${userID}`)
    },
    postFollow (userID:number) {
        return instance.post(`follow/${userID}`)
    }
}

type LogoutType<D = {}> = {
    data: D
    fieldsErrors: D
    messages: Array<any>
    resultCode: number
}

export const authAPI ={

    getLoginData () {
        return instance.get(`auth/me`)
            .then(response=> {
                return response.data
            })

    },

    login (email:string, password:string, rememberMe:boolean = false) {
        return instance.post<LogoutType>(`auth/login`, {email, password, rememberMe})
    },

    logout () {
        return instance.delete<LogoutType>(`auth/login`)
    }

}





