import axios from "axios"

axios.defaults.baseURL = process.env.VITE_BASE_URL
export function GetApi(path, header) {
    let headers = { Accept: "application/json", Authorization: header ? `FirebaseToken ${header}` : `Bearer ${JSON.parse(localStorage.getItem("calendar"))}` };
    const GetApiData = axios
        .get(path, { headers: headers })
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error.response;
        });
    return GetApiData;
}

export function GetApiWithoutToken(path) {
    let headers = { Accept: "application/json" };
    const GetApiData = axios
        .get(path, { headers: headers })
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error.response;
        });
    return GetApiData;
}

export function PostApi(path, body) {
    let headers = { Accept: "application/json", Authorization: `Bearer ${JSON.parse(localStorage.getItem("calendar"))}` };
    const PostApiData = axios
        .post(path, body, { headers: headers })
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error.response;
        });
    return PostApiData;
}

export function PostApiWithoutToken(path, body) {
    let headers = { Accept: "application/json" };
    const PostApiData = axios
        .post(path, body, { headers: headers })
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error.response;
        });
    return PostApiData;
}
