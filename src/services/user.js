import http from "../http-common";

const getUserByName = (name,token) => {
    return new Promise((resolve,reject) => {
        http.get("/user",{
            params: {
                name: name
            },
            headers: {
                "x-access-token": token
            }
        }).then(results => {
            resolve(results);
        }).catch(err => {
            reject(err);
        })
    })
}

const getUserProfile = (token) => {
    return new Promise((resolve, reject) => {
        http.get("/user/detail",{
            headers: {
                'content-type': 'multipart/form-data',
                "x-access-token": token
            }
        }).then(results => {
            resolve(results);
        }).catch(err => {
            reject(err);
        })
    })
}

export {
    getUserByName,
    getUserProfile,
}