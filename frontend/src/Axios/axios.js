import axios from "axios"
const instance = axios.create({
    baseURL:"https://todo-app-backend-3jo7.onrender.com/api"
})
export default instance;