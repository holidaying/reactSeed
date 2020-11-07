import $http from "src/service/http.js"
const urls={
    login:"/gataway/education/api/login"
}
export function login(data){
    return $http({
        url:urls["login"],
        type:"post",
        data
    })
}