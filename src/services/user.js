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

export {
    getUserByName
}