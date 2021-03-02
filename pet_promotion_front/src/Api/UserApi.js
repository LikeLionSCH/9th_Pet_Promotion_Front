import axios from 'axios';
const API = axios.create();

// User Login API => Response 값 User Token
export const UserLogin = ((username, password) => API.post("/user/login",{
    username: username,
    password: password
}))