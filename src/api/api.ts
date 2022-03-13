import axios from "axios";


const instance = axios.create({
    withCredentials:true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": '53743326-f61f-4a39-ac8a-be7cd4a5c568'
    }

})


//User API'S

export const getUsers = (currentPage:number, pageSize:number) => {
    return   instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response=> {
            return response.data
        })

}

export const getCurrentPage = (pageNumber:number, pageSize:number) => {
    return  instance.get(`users?page=${pageNumber}&count=${pageSize}`)
        .then(response=> {
            return response.data
        })

}


///PostContainer API'S

export const getUserProfile = (userID:number) => {
    return     instance.get(`profile/${userID}`)

}

///header API'S

export const getLoginData = () => {
    return    instance.get(`https://social-network.samuraijs.com/api/1.0/auth/me`)
        .then(response=> {
            return response.data
        })

}


export const deleteFollow = (userID:number) => {
    return    instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userID}`)

}


export const postFollow = (userID:number) => {
    return      instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userID}`)

}
