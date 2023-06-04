import axios from "axios";

const dbApi = axios.create({
    baseURL : "https://api.mindscan.info/",
    //baseURL : "https://dev-explorer-server.gen.foundation",
    headers : {'content-type' : "application/json"}
})

export default dbApi
