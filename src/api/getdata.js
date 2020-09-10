import $ajax from "./config";

/*登录接口*/
export const login = data => $ajax.get("/api/login", data);
export const baseTab = data => $ajax.get("/api/baseTab", data);

/*电子地图*/
export const getMarksList = data => $ajax.get("/api/getMarksList", data);

// export const forgetpassword = data =>$ajax.get('/api/forgetpassword',data)
//
// /*近三个月数据统计 */
// export const threemonth = data =>$ajax.get('/api/threemonth',data)
