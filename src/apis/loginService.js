import $http from "src/service/http.js"
const urls={
    login:"/gataway/education/api/login"
}
export function login(params){
    return $http({
        url:urls["login"],
        type:"post",
        params
    })
}